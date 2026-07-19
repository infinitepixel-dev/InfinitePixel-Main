const { initializeApp } = require("firebase-admin/app")
const { getFirestore, FieldValue, Timestamp } = require("firebase-admin/firestore")
const { defineSecret } = require("firebase-functions/params")
const { onDocumentCreated } = require("firebase-functions/v2/firestore")
const { logger } = require("firebase-functions")
const { Resend } = require("resend")

initializeApp()

const db = getFirestore()
const RESEND_API_KEY = defineSecret("RESEND_API_KEY")

const CONTACT_RECIPIENT = "info@infinitepixel.dev"
const FROM_ADDRESS = "Infinite Pixel Website <website@updates.infinitepixel.dev>"
const PROCESSING_LEASE_MINUTES = 10

/*
 * Escape user-provided text before placing it inside the HTML email.
 * This prevents submitted markup from being interpreted as email HTML.
 */
const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")

/*
 * Keep email header values on one line so submitted values cannot inject
 * additional headers into the outgoing message.
 */
const sanitizeHeader = (value = "") =>
  String(value).replace(/[\r\n]+/g, " ").trim().slice(0, 250)

/*
 * Firestore timestamps, JavaScript dates, and missing values are normalized
 * into a readable date for the notification email.
 */
const formatSubmittedAt = (value) => {
  if (value && typeof value.toDate === "function") {
    return value.toDate().toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "America/Chicago",
    })
  }

  return new Date().toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "America/Chicago",
  })
}

/*
 * Claim the notification before sending it.
 * Firestore events may be delivered more than once, so this transaction stops
 * overlapping invocations from sending the same inquiry simultaneously.
 */
const claimNotification = async (documentRef, eventId) => {
  return db.runTransaction(async (transaction) => {
    const snapshot = await transaction.get(documentRef)

    if (!snapshot.exists) return false

    const notification = snapshot.get("emailNotification") || {}

    if (notification.status === "sent") {
      return false
    }

    if (
      notification.status === "processing" &&
      notification.startedAt instanceof Timestamp
    ) {
      const leaseExpiresAt =
        notification.startedAt.toMillis() + PROCESSING_LEASE_MINUTES * 60_000

      if (leaseExpiresAt > Date.now()) {
        return false
      }
    }

    transaction.set(
      documentRef,
      {
        emailNotification: {
          status: "processing",
          eventId,
          startedAt: FieldValue.serverTimestamp(),
          attempts: FieldValue.increment(1),
        },
      },
      { merge: true },
    )

    return true
  })
}

/*
 * Creates a clear plain-text version for mail clients that do not render HTML.
 */
const buildTextEmail = (lead, leadId) => `
New project inquiry from the Infinite Pixel website

Name: ${lead.name || "Not provided"}
Email: ${lead.email || "Not provided"}
Company: ${lead.company || "Not provided"}
Project type: ${lead.projectType || "Not provided"}
Budget: ${lead.budget || "Not provided"}
Timeline: ${lead.timeline || "Not provided"}
Submitted: ${formatSubmittedAt(lead.createdAt)}

Message:
${lead.message || "No message provided"}

Lead ID: ${leadId}
Page: ${lead.pageUrl || "Not provided"}
Referrer: ${lead.referrer || "Not provided"}
`.trim()

/*
 * Creates the branded HTML notification sent to Infinite Pixel.
 */
const buildHtmlEmail = (lead, leadId) => {
  const rows = [
    ["Name", lead.name || "Not provided"],
    ["Email", lead.email || "Not provided"],
    ["Company", lead.company || "Not provided"],
    ["Project type", lead.projectType || "Not provided"],
    ["Budget", lead.budget || "Not provided"],
    ["Timeline", lead.timeline || "Not provided"],
    ["Submitted", formatSubmittedAt(lead.createdAt)],
  ]

  const details = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 16px 10px 0;color:#8fa1b8;font-size:13px;vertical-align:top;white-space:nowrap;">${escapeHtml(label)}</td>
          <td style="padding:10px 0;color:#f8fafc;font-size:14px;font-weight:600;vertical-align:top;">${escapeHtml(value)}</td>
        </tr>`,
    )
    .join("")

  return `<!doctype html>
<html lang="en">
  <body style="margin:0;background:#02050a;font-family:Inter,Arial,sans-serif;color:#f8fafc;">
    <div style="padding:32px 16px;">
      <div style="max-width:680px;margin:0 auto;background:#0a1019;border:1px solid #1b2a3d;border-radius:20px;overflow:hidden;">
        <div style="padding:28px 30px;background:linear-gradient(135deg,#0c1725,#0a1019);border-bottom:1px solid #1b2a3d;">
          <div style="font-size:12px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#45d7ba;">Infinite Pixel</div>
          <h1 style="margin:10px 0 0;font-size:28px;line-height:1.2;letter-spacing:-.03em;">New project inquiry</h1>
          <p style="margin:10px 0 0;color:#9fb0c4;font-size:14px;line-height:1.6;">A visitor submitted the project form on infinitepixel.dev.</p>
        </div>

        <div style="padding:26px 30px;">
          <table role="presentation" style="width:100%;border-collapse:collapse;">${details}</table>

          <div style="margin-top:22px;padding:20px;background:#07101a;border:1px solid #17314a;border-radius:14px;">
            <div style="margin-bottom:10px;color:#45d7ba;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;">Project message</div>
            <div style="color:#e2e8f0;font-size:15px;line-height:1.7;white-space:pre-wrap;">${escapeHtml(lead.message || "No message provided")}</div>
          </div>

          <div style="margin-top:24px;padding-top:20px;border-top:1px solid #1b2a3d;color:#718399;font-size:12px;line-height:1.7;">
            <div><strong style="color:#9fb0c4;">Lead ID:</strong> ${escapeHtml(leadId)}</div>
            <div><strong style="color:#9fb0c4;">Page:</strong> ${escapeHtml(lead.pageUrl || "Not provided")}</div>
            <div><strong style="color:#9fb0c4;">Referrer:</strong> ${escapeHtml(lead.referrer || "Not provided")}</div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>`
}

/*
 * Triggered after the Vue contact form creates a document in contactRequests.
 * The lead remains stored in Firestore, while this function emails the same
 * project details to info@infinitepixel.dev through Resend.
 */
exports.emailContactRequest = onDocumentCreated(
  {
    document: "contactRequests/{leadId}",
    region: "us-central1",
    secrets: [RESEND_API_KEY],
    retry: true,
    memory: "256MiB",
    timeoutSeconds: 60,
  },
  async (event) => {
    const snapshot = event.data

    if (!snapshot) {
      logger.warn("Contact request event did not include a Firestore snapshot.")
      return
    }

    const lead = snapshot.data()
    const leadId = event.params.leadId
    const eventId = event.id || `contact-${leadId}`

    const claimed = await claimNotification(snapshot.ref, eventId)

    if (!claimed) {
      logger.info("Contact notification was already sent or is being processed.", {
        leadId,
        eventId,
      })
      return
    }

    try {
      const resend = new Resend(RESEND_API_KEY.value())
      const visitorEmail = sanitizeHeader(lead.email)
      const visitorName = sanitizeHeader(lead.name || "Website visitor")

      const { data, error } = await resend.emails.send({
        from: FROM_ADDRESS,
        to: [CONTACT_RECIPIENT],
        replyTo: visitorEmail || undefined,
        subject: sanitizeHeader(`New project inquiry from ${visitorName}`),
        html: buildHtmlEmail(lead, leadId),
        text: buildTextEmail(lead, leadId),
      })

      if (error) {
        throw new Error(error.message || "Resend returned an unknown error.")
      }

      await snapshot.ref.set(
        {
          emailNotification: {
            status: "sent",
            eventId,
            provider: "resend",
            providerMessageId: data?.id || null,
            sentTo: CONTACT_RECIPIENT,
            sentAt: FieldValue.serverTimestamp(),
          },
        },
        { merge: true },
      )

      logger.info("Contact request email sent.", {
        leadId,
        eventId,
        providerMessageId: data?.id,
      })
    } catch (error) {
      logger.error("Unable to email contact request.", {
        leadId,
        eventId,
        error: error instanceof Error ? error.message : String(error),
      })

      await snapshot.ref.set(
        {
          emailNotification: {
            status: "failed",
            eventId,
            failedAt: FieldValue.serverTimestamp(),
            error:
              error instanceof Error
                ? error.message.slice(0, 500)
                : String(error).slice(0, 500),
          },
        },
        { merge: true },
      )

      /* Throwing allows Firebase's retry policy to attempt the email again. */
      throw error
    }
  },
)

# Infinite Pixel contact form with Firestore email notifications

This package keeps each contact request in Firestore and sends the submitted data to `info@infinitepixel.dev` with a Firebase Cloud Function and Resend.

## Included flow

1. `ContactForm.vue` writes the inquiry to `contactRequests`.
2. `emailContactRequest` runs when that Firestore document is created.
3. Resend emails the inquiry to `info@infinitepixel.dev`.
4. The Firestore document records whether the notification is `processing`, `sent`, or `failed`.

## 1. Copy the files

Merge the included folders into the root of your Vue/Firebase project:

```text
src/
functions/
firebase.json
firestore.rules
```

Do not replace an existing `firebase.json` blindly. When your project already has one, copy the `functions` and `firestore` sections into it.

## 2. Install the website dependency

```powershell
pnpm add firebase
```

## 3. Install and connect the Firebase CLI

```powershell
pnpm add -g firebase-tools
firebase login
firebase use --add
```

Choose the Firebase project used by your Vue app.

## 4. Install Cloud Function dependencies

```powershell
cd functions
pnpm install
cd ..
```

## 5. Create and verify a Resend sending domain

In Resend, add and verify a sending subdomain such as:

```text
updates.infinitepixel.dev
```

The function currently sends from:

```text
Infinite Pixel Website <website@updates.infinitepixel.dev>
```

If you verify a different domain or subdomain, update `FROM_ADDRESS` near the top of `functions/index.js`.

## 6. Create the Resend API key secret

Create an API key in Resend, then run:

```powershell
firebase functions:secrets:set RESEND_API_KEY
```

Paste the Resend API key when prompted. Do not put this key in the Vue `.env` file.

## 7. Deploy Firestore rules and the function

```powershell
firebase deploy --only firestore:rules,functions:emailContactRequest
```

Cloud Functions deployment generally requires the Firebase project to use the Blaze billing plan.

## 8. Test it

Submit the contact form on your website. Then confirm:

- A new document appears under `contactRequests` in Firestore.
- `emailNotification.status` becomes `sent`.
- The inquiry arrives at `info@infinitepixel.dev`.
- Pressing Reply in your mailbox addresses the visitor because the function uses their submitted email as `replyTo`.

## View logs

```powershell
firebase functions:log --only emailContactRequest
```

## Important security notes

- The Resend API key exists only in Firebase Secret Manager.
- User-provided HTML is escaped before being inserted into the email.
- Public Firestore reads remain blocked by `firestore.rules`.
- Firestore events may be delivered more than once, so the function claims each notification before sending to reduce duplicate emails.

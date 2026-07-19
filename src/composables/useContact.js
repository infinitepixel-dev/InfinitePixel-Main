import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../firebase/firebase"

const CONTACT_COLLECTION = "contactRequests"

/*
 * Stores a new project inquiry in Cloud Firestore.
 * Browser-derived values are intentionally limited to basic lead attribution.
 */
export const submitContactRequest = async (form) => {
  const request = {
    name: form.name.trim(),
    email: form.email.trim().toLowerCase(),
    company: form.company.trim(),
    projectType: form.projectType,
    budget: form.budget,
    timeline: form.timeline,
    message: form.message.trim(),
    status: "new",
    read: false,
    source: "website-contact-modal",
    pageUrl: window.location.href,
    referrer: document.referrer || "direct",
    userAgent: navigator.userAgent,
    createdAt: serverTimestamp(),
  }

  return addDoc(collection(db, CONTACT_COLLECTION), request)
}

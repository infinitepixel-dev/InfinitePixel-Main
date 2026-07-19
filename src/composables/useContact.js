import { addDoc, collection, serverTimestamp } from "firebase/firestore"

import { db } from "../firebase/firebase"

/**
 * Creates a new contact request in Firestore.
 *
 * @param {Object} form
 * @returns {Promise<{ success: boolean, id?: string, error?: unknown }>}
 */
export const submitContactRequest = async (form) => {
  console.log("Starting Firestore contact submission:", form)

  try {
    const documentReference = await addDoc(collection(db, "contactRequests"), {
      name: form.name?.trim() || "",
      email: form.email?.trim() || "",
      company: form.company?.trim() || "",
      projectType: form.projectType || "",
      budget: form.budget || "",
      timeline: form.timeline || "",
      message: form.message?.trim() || "",

      status: "new",
      read: false,
      createdAt: serverTimestamp(),
    })

    console.log("Firestore contact request created:", documentReference.id)

    return {
      success: true,
      id: documentReference.id,
    }
  } catch (error) {
    console.error("Firestore contact submission failed:", error)

    return {
      success: false,
      error,
    }
  }
}

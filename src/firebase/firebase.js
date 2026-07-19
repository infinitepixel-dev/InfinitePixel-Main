import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

/*
 * Firebase values are read from Vite environment variables.
 * Copy .env.example to .env and add the values from:
 * Firebase Console -> Project settings -> Your apps -> Web app.
 */
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

const requiredConfig = [
  "apiKey",
  "authDomain",
  "projectId",
  "appId",
]

const missingConfig = requiredConfig.filter((key) => !firebaseConfig[key])

if (missingConfig.length > 0) {
  console.warn(
    `Firebase is missing configuration values: ${missingConfig.join(", ")}. ` +
      "Add them to your .env file before submitting the contact form.",
  )
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

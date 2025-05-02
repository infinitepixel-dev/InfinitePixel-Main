import { initializeApp, getApps, getApp } from "firebase/app"

// Firestore DB
import { getFirestore } from "firebase/firestore"

import {
  initializeAuth,
  browserSessionPersistence,
  onAuthStateChanged,
} from "firebase/auth"

// ✅ Firebase config from env variables
export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

// ✅ Initialize Firebase app only once
const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig)

// ✅ Initialize Auth WITH sessionStorage persistence (avoid IndexedDB)
const auth = initializeAuth(firebaseApp, {
  persistence: browserSessionPersistence,
})

const db = getFirestore(firebaseApp, "infinitepixel-dashboard")

// Wait for Auth initialization
const waitForAuth = async () => {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, () => {
      resolve({ firebaseApp, auth, db })
    })
  })
}

export const getFirebaseInstance = async () => {
  return await waitForAuth()
}

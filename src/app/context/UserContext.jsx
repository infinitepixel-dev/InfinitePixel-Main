"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { getFirebaseInstance } from "@/lib/firebaseClient";
import { useRouter } from "next/navigation";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [userEmail, setUserEmail] = useState("");
  const [userFirstName, setUserFirstName] = useState("");
  const [checkingAuth, setCheckingAuth] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const { auth, db } = await getFirebaseInstance();

      onAuthStateChanged(auth, async (user) => {
        if (!user) {
          router.push("/dashboard/login");
        } else {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserFirstName(docSnap.data().fullName?.split(" ")[0] || "User");
            setUserEmail(docSnap.data().email || "");
          }
          setCheckingAuth(false);
        }
      });
    };

    checkAuth();
  }, [router]);

  return (
    <UserContext.Provider value={{ userEmail, userFirstName, checkingAuth }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}

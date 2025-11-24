"use client";

import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface User {
  uid: string;
  email: string | null;
}

const UserContext = createContext<User | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (firebaseUser) => {
      const safeUser = firebaseUser
        ? {
            uid: firebaseUser.uid,
            email: firebaseUser.email,
          }
        : null;
      setUser(safeUser);
    });
    return () => unsub();
  }, []);
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);

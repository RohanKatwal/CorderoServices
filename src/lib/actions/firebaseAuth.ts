import {
  setPersistence,
  signInWithEmailAndPassword,
  browserSessionPersistence,
} from "firebase/auth";
import { auth } from "../firebase";
import { LoginType } from "@/app/(root)/login/[[...login]]/loginValidation";

export const login = async (data: LoginType) => {
  try {
    const { email, password } = data;
    
    await setPersistence(auth, browserSessionPersistence);

    if (!email.trim() || !password.trim()) {
      return { user: null, error: "Email and password are required" };
    }


    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const token = await userCredential.user.getIdToken();

    await fetch("/api/set-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
      credentials: "include",
    });

    const user = {
      uid: userCredential.user.uid,
      email: userCredential.user.email,
    };

    return { user, error: null };
  } catch (error) {
    return { user: null, error: "Login Failed" };
  }
};

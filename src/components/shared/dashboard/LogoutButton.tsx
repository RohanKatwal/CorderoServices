"use client";

import { clearSession } from "@/app/api/clear-session/route";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();
  const handleLogout = async () => {
    await signOut(auth);
    await clearSession();
    router.push("/login");
  };
  return (
    <button onClick={handleLogout} className="btn-primary">
      Logout
    </button>
  );
};

export default LogoutButton;

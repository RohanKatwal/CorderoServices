"use client";

import { clearSession } from "@/lib/clearSession";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const LogoutButton = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    if (loading) return;
    setLoading(true);

    try {
      await signOut(auth);
      await clearSession();
      toast.success("Sucessfully logged out");
      router.push("/login");
    } catch (err) {
      toast.error("Failed to logout");
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className={`btn-primary ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {loading ? "Logging out..." : "Logout"}
    </button>
  );
};

export default LogoutButton;

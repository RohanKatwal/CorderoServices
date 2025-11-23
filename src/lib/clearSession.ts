"use server";

import { cookies } from "next/headers";

export const clearSession = async () => {
  (await cookies()).delete("session");
};

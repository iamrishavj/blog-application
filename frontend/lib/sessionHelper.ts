import { cookies } from "next/headers";

export function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return session;
}

export async function setSession(token: string) {
  const expires = new Date(Date.now() + 60 * 60 * 1000); // 1 hour
  cookies().set("session", token, { expires, httpOnly: true });
}

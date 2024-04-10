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

export async function getUserIdFromToken(token: string) {
  try {
    const response = await fetch(process.env.GATEWAY_URL + "/api/verifyToken", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (response.ok) {
      return data.userId; // Assuming the user service sends back the userId
    } else {
      console.error("Token verification failed:", data.message);
      return null;
    }
  } catch (error) {
    console.error("Error verifying token:", error);
    return null;
  }
}

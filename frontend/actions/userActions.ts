"use server";

import { redirect } from "next/navigation";

export async function registerUser(currentState: any, formData: FormData) {
  const response = await fetch(
    process.env.GATEWAY_URL + "/api/users/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type header for JSON
      },
      body: JSON.stringify({
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    }
  );
  if (response.ok) {
    redirect("/user/login");
  }
  return response.json().then((data) => data.message);
}

export async function loginUser(formData: FormData) {
  const response = await fetch(process.env.GATEWAY_URL + "/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: formData.get("email"),
      password: formData.get("password"),
    }),
  });
  return response.json();
}

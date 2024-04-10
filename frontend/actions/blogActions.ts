import { getUserIdFromToken } from "@/lib/sessionHelper";
import { redirect } from "next/navigation";

export async function createBlogPost(
  currentState: any,
  {
    token,
    title,
    content,
    author,
  }: {
    token: string;
    title: string;
    content: string;
    author: string;
  }
) {
  if (!title || !content) {
    return "Title and content are required";
  }
  if (token === null) {
    return "You must be logged in to create a post";
  }

  const response = await fetch(process.env.GATEWAY_URL + "/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title,
      content,
      author,
    }),
  });

  const res = await response.json();

  if (res.ok) {
    redirect(`/blog/${res.data.id}`);
  }
  return res.data.message;
}

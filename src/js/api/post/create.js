import { API_SOCIAL_POSTS } from "../constants";

export async function createPost({ title, body, tags, media }) {
  try {
    const response = await fetch(`${API_SOCIAL_POSTS}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        body,
        tags,
        media,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Failed to create post");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

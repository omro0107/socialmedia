import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";

export async function createPost({ title, body, tags, media }) {
  try {
    const response = await fetch(`${API_SOCIAL_POSTS}`, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify({
        title,
        body,
        tags,
        media,
      }),
    });

    const data = await response.json();

      if (!response.ok) {
      const userError = (document.getElementById(
        "userError"
      ).innerHTML = `${result.errors[0].message}`);
    }

    if (response.ok) {
      userError.style.display = "none";
      document.getElementById("createPostButton").style.display = "none";
      document.getElementById(
        "userSuccess"
      ).innerHTML = `Post was created successfully, we'll now redirect you to the home page`;
      setTimeout(() => {
        window.location.href = "/";
      }, 6000);
    }

    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

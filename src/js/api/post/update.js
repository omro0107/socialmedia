import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";

export async function updatePost(id, { title, body, tags, media }) {
  try {
    const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, {
      method: "PUT",
      headers: headers(),
      body: JSON.stringify({
        title,
        body,
        tags,
        media,
      }),
    });

    const result = await response.json
    
    if (!response.ok) {
      document.getElementById("errorMessage").innerHTML = result.errors[0].message;
    }

    if (response.ok) {
      document.getElementById("editPostButton").style.display = "none";
      document.getElementById("errorMessage").style.display = "none";
      document.getElementById(
        "userSuccess"
      ).innerText = `Post was updated successfully, we'll now redirect you to the post page`;
      setTimeout(() => {
        window.location.href = `/post/?id=${fetchId}`;
      }, 6000);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}
import { API_SOCIAL_POSTS } from "../constants";

export async function deletePost(id) {
  try {
    const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      return true;
    } else {
      throw new Error("Failed to delete post");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}
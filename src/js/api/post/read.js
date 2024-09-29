import {API_SOCIAL_POSTS} from '../constants';

export async function readPost(id) {
  try {
    const response = await fetch(`${API_SOCIAL_POSTS}/${id}`);

  if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Failed to get post");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function readPosts(limit = 12, page = 1, tag) {
  try {
    const params = new URLSearchParams();
    params.set('limit', limit);
    params.set('page', page);
    if (tag) {
      params.set('tag', tag);
    }

    const response = await fetch(`${API_SOCIAL_POSTS}?${params.toString()}`);

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Failed to get posts");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}
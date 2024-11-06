import { headers } from '../headers';
import { API_SOCIAL_POSTS } from '../constants';
import { displayMyPosts } from "../../utilities/displayMyPosts";
import { blogPostsBuilder } from "../../utilities/displayPosts";


export async function readSinglePost() {
  const pageId = new URLSearchParams(window.location.search).get("id");
  try {
    const fetchInfo = await fetch(`${API_SOCIAL_POSTS}/${pageId}?_author=true&_comments=true`, {
      method: "GET",
      headers: headers(),
    });

    if (fetchInfo.ok) {
      const data = await fetchInfo.json();
      const postData = data.data;

      return postData;
    }
  } catch (error) {
    alert(error, "Failed to read single post");
  }
}

export async function readPosts(limit = 12, page = 1, tag) {
  try {
    const response = await fetch(API_SOCIAL_POSTS, {
      method: "GET",
      headers: headers(),
    });

    const resultJson = await response.json();
    const postObjects = resultJson.data;
    const postObjectsToRender = postObjects.slice(0, limit);

    blogPostsBuilder(postObjectsToRender);
  } catch (error) {
    console.error(error);
  }
}

export async function readMyPosts(limit = 6, page = 1, tag) {
  try {
    const response = await fetch(API_SOCIAL_MY_USER_POSTS, {
      method: "GET",
      headers: headers(),
    });

    const resultJson = await response.json();
    const postObjects = resultJson.data;
    const postObjectsToRender = postObjects.slice(0, limit);

    displayMyPosts(postObjectsToRender);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function readPostsByUser(username, limit = 12, page = 1, tag) {
  const url = `${API_SOCIAL_PROFILES}/${username}/posts?_tag=${tag}&limit=${limit}&page=${page}&_author=true`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: headers(),
    });
    const responseData = await response.json();
    if (!response.ok) {
      throw new Error(data.errors[0].message);
    }
    return responseData.data;
  } catch (error) {
    console.error("Error fetching posts", error);
    return null;
  }
}
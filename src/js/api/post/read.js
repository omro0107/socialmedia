import { doFetch } from '../../utilities/doFetch';
import { API_SOCIAL_POSTS } from '../../api/constants.js';

export async function readPost(postId) {
  const url = `${API_SOCIAL_POSTS}/${postId}`;
  const response = await doFetch(url);
  
  if (!response || !response.data) {
    throw new Error('Post not found');
  }
  
  return response;
}
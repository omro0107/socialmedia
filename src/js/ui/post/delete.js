import { deletePost } from '../api/post/delete';

export async function onDeletePost() {
  try {
    const postId = window.location.pathname.split('/').pop();
    await deletePost(postId);
    window.location.href = '/posts';
  } catch (error) {
    console.error(error);
  }
}
import { updatePost } from '../../api/post/update';

export async function onUpdatePost(event, postId) {
  event.preventDefault();

  const formData = Object.fromEntries(new FormData(event.target));

  const updatedPost = {
    title: formData.title,
    body: formData.body,
    media: {
      url: formData.url,
      alt: formData.altTag,
    },
    tags: formData.tags ? formData.tags.split(", ").map((tag) => tag.trim()) : [],
  };

  try {
    await updatePost(postId, updatedPost);
  } catch (error) {
    console.error('Failed to update post:', error);
    document.getElementById("errorMessage").innerText = 'Failed to update post. Please try again.';
  }
}
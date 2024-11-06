import { updatePost } from '../api/post/update';

export async function onUpdatePost(event) {
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

  updatePost(updatedPost);
}
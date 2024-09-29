import { updatePost } from '../api/post/update';

export async function onUpdatePost(event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;

  try {
    const data = await updatePost({ title, body });
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
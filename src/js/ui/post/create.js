export async function onCreatePost(event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;
  const tags = document.getElementById("tags").value;
  const media = document.getElementById("media").value;

  try {
    const data = await createPost({ title, body, tags, media });
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

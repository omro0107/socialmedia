import { fetchId } from "../api/constants";
import { deletePost } from "../api/post/delete";
import { formatDate } from "./dateAndTime";

export async function displaySinglePost(post) {
  const createdAt = post.created;
  const updatedAt = post.updated;

  const createdAtFormatted = formatDate(createdAt);
  const updatedAtFormatted = formatDate(updatedAt);

  const postImage = document.getElementById("image");
  const header = document.getElementById("postHeader");
  const postAuthor = document.getElementById("postAuthor");
  const postText = document.getElementById("post-content");
  const dateCreated = document.getElementById("published");
  const updatedTime = document.getElementById("updated");

  postImage.src = post.media?.url || "";
  postImage.setAttribute("alt", post.media?.alt || "Missing alt text");
  postAuthor.innerText = `Published by: ${post.author.name}`;
  header.innerText = post.title;
  postText.innerText = post.body;
  dateCreated.innerText = `Posted: ${createdAtFormatted}`;
  updatedTime.innerText = `Updated: ${updatedAtFormatted}`;

  if (createdAt === updatedAt) {
    updatedTime.style.display = "none";
  }

  if (post.author.name === localStorage.getItem("userName")) {
    const buttonWrapper = document.createElement("div");
    buttonWrapper.className = "mt-4";

    const createDeleteButton = document.createElement("button");
    const createEditButton = document.createElement("button");

    createDeleteButton.innerHTML = "Delete Post";
    createEditButton.innerHTML = "Edit Post";

    createDeleteButton.className = "bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-700 transition duration-200";
    createEditButton.className = "bg-cyan-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-cyan-700 transition duration-200 mr-2";
    

    buttonWrapper.append(createEditButton, createDeleteButton);

    document.querySelector("main").append(buttonWrapper);

    createEditButton.addEventListener("click", async () => {
      window.location.href = `/post/edit/?id=${fetchId}`;
    });

    createDeleteButton.addEventListener("click", async () => {
      await deletePost();
    });
  }
}
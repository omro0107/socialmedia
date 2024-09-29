import "./css/style.css";

import router from "./js/router";

await router(window.location.pathname);

import { register } from "../src/js/api/auth/register";
import { login } from "../src/js/api/auth/login";
import { createPost } from "../src/js/api/post/create";
import { readPost } from "../src/js/api/post/read";
import { readPostsByUser } from "../src/js/api/post/read";
import { updatePost } from "../src/js/api/post/update";
import { deletePost } from "../src/js/api/post/delete";

// Register form submission handler
document.getElementById("register-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    const data = await register({ name, email, password });
    console.log(data);
  } catch (error) {
    console.error(error);
  }
});

// Login form submission handler
document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    const data = await login({ email, password });
    console.log(data);
  } catch (error) {
    console.error(error);
  }
});

// Create post form submission handler
document.getElementById("post-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;
  try {
    const data = await createPost({ title, body });
    console.log(data);
  } catch (error) {
    console.error(error);
  }
});

// Get post button click handler
document.getElementById("get-post-button").addEventListener("click", async () => {
  const id = document.getElementById("post-id").value;
  try {
    const data = await getPost(id);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
});

// Get all posts button click handler
document.getElementById("get-all-posts-button").addEventListener("click", async () => {
  try {
    const data = await getPosts();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
});

// Edit post form submission handler
document.getElementById("edit-post-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const id = document.getElementById("post-id").value;
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;
  try {
    const data = await editPost({ id, title, body });
    console.log(data);
  } catch (error) {
    console.error(error);
  }
});

// Delete post button click handler
document.getElementById("delete-post-button").addEventListener("click", async () => {
  const id = document.getElementById("post-id").value;
  try {
    const data = await deletePost(id);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
});
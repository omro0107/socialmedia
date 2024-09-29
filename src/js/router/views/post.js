alert("Single Post Page");
import { readPosts } from '../../api/post/read';

async function getPosts() {
  const posts = await readPosts();
  console.log(posts);

  /** Display the posts on the page */
  const postList = document.getElementById('post-list');
  posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.textContent = post.title;
    postList.appendChild(postElement);
  });
}

getPosts();

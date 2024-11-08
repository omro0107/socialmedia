import { headers } from '../api/headers';
import { readPosts } from "../api/post/read";
import { blogPostsBuilder } from "../utilities/displayPosts";


export function createPostCard(post) {
  const postContainer = document.createElement('div');
  postContainer.className = 'max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer';

  const postImage = document.createElement('img');
  postImage.src = post.media?.url || '';
  postImage.alt = post.media?.alt || 'No description available';
  postImage.className = 'w-full h-48 object-cover';

  const postTitle = document.createElement('h2');
  postTitle.innerText = post.title;
  postTitle.className = 'px-6 py-4 text-lg font-semibold text-gray-800';

  postContainer.appendChild(postImage);
  postContainer.appendChild(postTitle);

  postContainer.addEventListener('click', () => {
    window.location.href = `/post/?id=${post.id}`;
  });

  return postContainer;
}

export async function displayPostCards(limit = 12, page = 1, tag) {
  const posts = await readPosts(limit, page, tag);
  const postList = document.querySelector('.post-list');

  postList.innerHTML = '';

  if (!Array.isArray(posts) || posts.length === 0) {
    postList.innerHTML = '<p>No posts found</p>';
    return;
  }

  posts.forEach((post) => {
    const postCard = createPostCard(post);
    postList.appendChild(postCard);
  });
}
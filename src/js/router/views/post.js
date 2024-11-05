alert("Single Post Page");
import { readPost } from '../../api/post/read';

async function getPost() {
  const params = new URLSearchParams(window.location.search);
  const postId = params.get('id');

  if (!postId) {
    alert('Post ID is missing in the URL.');
    return;
  }

  try {
    const post = await readPost(postId);
    console.log(post);

    displayPost(post);
  } catch (error) {
    console.error('Error fetching the post:', error);
    alert('Failed to load the post. Please try again later.');
  }
}

function displayPost(post) {
  const postContainer = document.getElementById('post-container');

 
  postContainer.innerHTML = '';

  const postTitle = document.createElement('h1');
  postTitle.textContent = post.data.title;

  const postBody = document.createElement('div');
  postBody.textContent = post.data.body;

  const postTags = document.createElement('div');
  postTags.textContent = `Tags: ${post.data.tags.join(', ')}`;
  postTags.classList.add('tags');

  const postImage = document.createElement('img');
  postImage.src = post.media?.url || '../public\images\_148da948-19bc-4fde-bc83-168884cc7945.jpg'; 
  postImage.alt = post.media?.alt || 'Post image';

  const postCreated = document.createElement('div');
  const createdDate = new Date(post.data.created);
  postCreated.textContent = `Created on: ${createdDate.toLocaleDateString()}`; 

  const authorContainer = document.createElement('div');
  const authorName = document.createElement('div');
  authorName.textContent = `Author: ${post.data.author.name}`;
  const authorAvatar = document.createElement('img');
  authorAvatar.src = post.data.author.avatar?.url || 'default_avatar_url.jpg'; 
  authorAvatar.alt = post.data.author.avatar?.alt || 'Author avatar';
  authorAvatar.classList.add('avatar');
  
  authorContainer.appendChild(authorAvatar);
  authorContainer.appendChild(authorName);

  postContainer.appendChild(postTitle);
  postContainer.appendChild(postBody);
  postContainer.appendChild(postTags);
  postContainer.appendChild(postImage);
  postContainer.appendChild(postCreated);
  postContainer.appendChild(authorContainer);
}


document.addEventListener('DOMContentLoaded', getPost);
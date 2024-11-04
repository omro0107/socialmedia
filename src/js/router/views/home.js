import { authGuard } from "../../utilities/authGuard";
import { doFetch } from "../../utilities/doFetch";
import { API_SOCIAL_POSTS } from "../../api/constants.js";

authGuard();

async function main() {
  try {
    document.getElementById('loader').style.display = 'block';

    const url = `${API_SOCIAL_POSTS}`;
    console.log('Fetching from URL:', url);

    const responseData = await doFetch(url);
    console.log('Response data:', responseData);

    if (!responseData) {
      throw new Error('Failed to fetch post data from the API');
    }

    const postThumbnailsContainer = document.getElementById('post-thumbnails');
    postThumbnailsContainer.innerHTML = '';

    const latestPosts = responseData.data.slice(-12);

    latestPosts.forEach(post => {
      const postThumbnail = document.createElement('div');
      postThumbnail.classList.add('blogpost');

      const thumbnailImage = document.createElement('img');
      thumbnailImage.src = post.media.url;
      thumbnailImage.alt = post.media.alt;
      thumbnailImage.classList.add('blogpostimg');

      const postDate = document.createElement('div');
      postDate.classList.add('post-date');
      const postDateObj = new Date(post.created);
      const options = { month: 'short', day: '2-digit' };
      postDate.textContent = postDateObj.toLocaleDateString('en-US', options);

      const icon = document.createElement('i');
      icon.classList.add('fa-solid', 'fa-ellipsis');

      const dateAndIconContainer = document.createElement('div');
      dateAndIconContainer.classList.add('date-icon-container');
      dateAndIconContainer.appendChild(postDate);
      dateAndIconContainer.appendChild(icon);

      const postTitle = document.createElement('h2');
      postTitle.textContent = post.title;

      postThumbnail.appendChild(thumbnailImage);
      postThumbnail.appendChild(dateAndIconContainer);
      postThumbnail.appendChild(postTitle);

      postThumbnail.addEventListener('click', () => {
        window.location.href = `post/index.html?id=${post.id}`; 
      });

      postThumbnailsContainer.appendChild(postThumbnail);
    });
    
    document.getElementById('loader').style.display = 'none';
  } catch (error) {
    console.error('Full error details:', error.message);
    document.getElementById('loader').style.display = 'none';
    alert('Oops! Something went wrong while fetching posts. Please try again later.');
  }
}

main();
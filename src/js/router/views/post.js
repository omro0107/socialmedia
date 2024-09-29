alert("Single Post Page");
import { readPosts } from '../../api/post/read';

async function getPosts() {
  const posts = await readPosts(12);
  console.log(posts);

 /** create a grid container */ 
 const gridContainer = document.getElementById('post-thumbnails');
 gridContainer.classList.add('grid-container');

 /** loop through each post and create a thumbnail */
 posts.data.forEach(post => {
   const thumbnail = document.createElement('div');
   thumbnail.classList.add('thumbnail');

   /** create an image element */
   const image = document.createElement('img');
   image.src = post.media.url;
   image.alt = post.media.alt;
   thumbnail.appendChild(image);

   /** create a title element */
   const title = document.createElement('h2');
   title.textContent = post.title;
   thumbnail.appendChild(title);

   /** add the thumbnail to the grid container */
   gridContainer.appendChild(thumbnail);
 });
}

getPosts();

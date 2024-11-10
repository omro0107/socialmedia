export function blogPostsBuilder(blogPosts) {
  let blogPostList = document.querySelector(".post-list");
  blogPostList.innerHTML = "";

  blogPosts.forEach((element) => {
    let postCard = document.createElement("div");
    postCard.className = "bg-white shadow-md rounded-lg overflow-hidden m-4 cursor-pointer transition-transform transform hover:scale-105";

    let blogPostImage = document.createElement("img");
    blogPostImage.className = "w-full h-48 object-cover";
    blogPostImage.setAttribute("src", element.media?.url || "");
    blogPostImage.setAttribute("alt", element.media?.alt || "No description available");

    let postContent = document.createElement("div");
    postContent.className = "p-4";

    let postTitle = document.createElement("h3");
    postTitle.className = "text-lg font-semibold mb-2";
    postTitle.innerHTML = `${element.title}`;

    let postDescription = document.createElement("p");
    postDescription.className = "text-gray-600";
    postDescription.innerHTML = element.description || "No description available";
   
    postContent.appendChild(postTitle);
    postContent.appendChild(postDescription);
    postCard.appendChild(blogPostImage);
    postCard.appendChild(postContent);
    
    blogPostList.appendChild(postCard);

    postCard.addEventListener("click", async () => {
      window.location.href = `/post/?id=${element.id}`;
    });
  });
}

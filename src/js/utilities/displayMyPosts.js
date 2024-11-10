export function displayMyPosts(posts) {
  let postList = document.querySelector(".myPosts-list");
  postList.innerHTML = ""; // Clear previous content

  posts.forEach((element) => {
    let postCard = document.createElement("div");
    postCard.className = "bg-white shadow-md rounded-lg overflow-hidden m-4 cursor-pointer transition-transform transform hover:scale-105";

    let postImage = document.createElement("img");
    postImage.className = "w-full h-48 object-cover";
    postImage.setAttribute("src", element.media?.url || "");
    postImage.setAttribute("alt", element.media?.alt || "No description available");

    let postContent = document.createElement("div");
    postContent.className = "p-4";

    let postTitle = document.createElement("h3");
    postTitle.className = "text-lg font-semibold mb-2";
    postTitle.innerHTML = `${element.title}`; 

    let postBody = document.createElement("p");
    postBody.className = "text-gray-600";
    postBody.innerHTML = element.body || "No content available";

    postContent.appendChild(postTitle);
    postContent.appendChild(postBody);
    postCard.appendChild(postImage);
    postCard.appendChild(postContent);
    
    postList.appendChild(postCard);

    postCard.addEventListener("click", async () => {
      window.location.href = `/post/?id=${element.id}`;
    });
  });
}
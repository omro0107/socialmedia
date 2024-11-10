export function displayUser () {
  const userProfileContainer = document.getElementById("userProfile");
  
  let userData;
  if (localStorage.clickedUserData) {
      userData = JSON.parse(localStorage.clickedUserData);
  } else {
      userData = JSON.parse(localStorage.myUserData);
  }

  const userBanner = document.createElement("div");
  userBanner.className = "w-full h-48 bg-cover bg-center rounded-lg";
  userBanner.style.backgroundImage = `url(${userData.data.banner.url})`;
  
  const avatarImg = document.createElement("img");
  avatarImg.src = userData .data.avatar.url;
  avatarImg.setAttribute("alt", userData.data.avatar.alt);
  avatarImg.className = "absolute top-[-30px] left-4 w-24 h-24 rounded-full border-4 border-white shadow-lg";

  const userName = document.createElement("h2");
  userName.innerHTML = userData.data.name;
  userName.className = "text-xl font-semibold text-center mt-16";

  const userBio = document.createElement("p");
  userBio.innerHTML = userData.data.bio;
  userBio.className = "text-center text-gray-600 mt-2";

  const userStats = document.createElement("div");
  userStats.className = "text-center mt-4";
  userStats.innerHTML = `
      <p class="text-sm">Posts: ${userData.data._count.posts}</p>
      <p class="text-sm">Followers: ${userData.data._count.followers}</p>
      <p class="text-sm">Following: ${userData.data._count.following}</p>
  `;

  userProfileContainer.appendChild(userBanner);
  userProfileContainer.appendChild(avatarImg);
  userProfileContainer.appendChild(userName);
  userProfileContainer.appendChild(userBio);
  userProfileContainer.appendChild(userStats);
}

document.addEventListener("DOMContentLoaded", displayUser );
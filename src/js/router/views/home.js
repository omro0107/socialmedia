import { authGuard } from "../../utilities/authGuard";
import { readPosts } from "../../api/post/read";
import { readMyPosts } from "../../api/post/read";
import { accessToken } from "../../api/constants";
import { setLogoutListener } from "../../ui/global/logout";
import { displayError } from "../../api/post/read";

if (accessToken) {
  document.getElementById("loginButton").style.display = "none";
  document.getElementById("registerButton").style.display = "none";
}

authGuard();
setLogoutListener();
readPosts(12, 1);
readMyPosts()
displayError();

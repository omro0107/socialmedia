import { onLogout } from "../../ui/auth/logout";

export function setLogoutListener() {
  const button = document.getElementById("logout-button");
  const mobileButton = document.getElementById("logout-button-mobile");


  button.addEventListener("click", onLogout);
  mobileButton.addEventListener("click", onLogout);
}

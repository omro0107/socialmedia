import { onLogout } from "../../ui/auth/logout";

export function setLogoutListener() {
  const button = document.getElementById("logout-button");

  button.addEventListener("click", onLogout);
}
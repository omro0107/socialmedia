import { logout } from '../api/auth/logout';

document.getElementById("logout-button").addEventListener("click", async () => {
  await logout();
});

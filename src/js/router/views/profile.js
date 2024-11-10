import { authGuard } from "../../utilities/authGuard";
import { displayUser } from "../../utilities/displayProfile";
import { onUpdateProfile } from "../../ui/profile/update";
import { setLogoutListener } from "../../ui/global/logout";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.forms.updateProfile;

  form.addEventListener("submit", onUpdateProfile);

  displayUser();
  setLogoutListener();
  authGuard();
});

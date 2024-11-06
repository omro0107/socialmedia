import { authGuard } from "../../utilities/authGuard";
import { displayUser } from "../../utilities/displayProfile";
import { onUpdateProfile } from "../../ui/profile/update";


const form = document.forms.updateProfile;

form.addEventListener("submit", onUpdateProfile);

displayUser();

authGuard();

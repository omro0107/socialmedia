import { authGuard } from "../../utilities/authGuard";
import { prefillEditForms } from "../../utilities/prefilledEditForm";
import { onUpdatePost } from "../../ui/post/update";

prefillEditForms();

const form = document.forms.editpostform;

form.addEventListener("submit", onUpdatePost);

authGuard();

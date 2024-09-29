import { onCreatePost } from "../../ui/post/create";
import { authGuard } from "../../utilities/authGuard";

authGuard();

const form = document.querySelector('form[name="create-post-form"]');

form.addEventListener("submit", onCreatePost);

import { authGuard } from "../../utilities/authGuard";
import { prefilledEditForm } from "../../utilities/prefilledEditForm";
import { onUpdatePost } from "../../ui/post/update";

prefilledEditForm();

const form = document.forms.editpostform;

document.querySelector('form[name="editpostform"]').addEventListener('submit', (event) => {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = Number(urlParams.get('id'));
  onUpdatePost(event, postId);
});

authGuard();

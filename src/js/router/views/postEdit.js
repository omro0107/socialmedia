import { authGuard } from "../../utilities/authGuard";
import { onUpdatePost } from '../../ui/post/update';
import { onDeletePost } from '../../ui/post/delete';

authGuard();

const postId = window.location.pathname.split('/').pop();

const form = document.getElementById('edit-post-form');
form.addEventListener('submit', onUpdatePost);

const deleteButton = document.getElementById('delete-post-button');
deleteButton.addEventListener('click', onDeletePost);

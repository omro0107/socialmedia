import { onLogin } from "../../ui/auth/login";

const form = document.querySelector('form[name="login-form"]');

form.addEventListener("submit", onLogin);

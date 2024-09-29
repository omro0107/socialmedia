import { onLogin } from "../../ui/auth/login";

const form = document.querySelector('login-form');

form.addEventListener("submit", onLogin);

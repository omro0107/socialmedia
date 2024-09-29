import { onRegister } from "../../ui/auth/register";

const form = document.querySelector('form[name="register-form"]');

form.addEventListener("submit", onRegister);

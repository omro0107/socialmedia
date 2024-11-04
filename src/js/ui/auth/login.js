import { login } from "../../api/auth/login";

export async function onLogin(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const data = await login({ email, password });
    localStorage.setItem('accessToken', data.token);
    window.location.href = '/';
  } catch (error) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = error.message;
  }
}
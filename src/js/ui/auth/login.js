import { login } from "../../api/auth/login";

export async function onLogin(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const data = await login({ email,  password });
    console.log('Login response:', data);
    if (data.accessToken) {
    localStorage.setItem('accessToken', data.accessToken);
    console.log('Token stored:', localStorage.getItem('accessToken'));
    window.location.href = '/';
    } else {
      console.error('No access token recieved from server')
    }
    
  } catch (error) {
    console.log('Login error', error)
    const errorMessage = document.getElementById('error-message');
    if (errorMessage) {
      errorMessage.textContent = error.message;
    }
  }
}
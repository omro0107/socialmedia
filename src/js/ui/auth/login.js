import { login } from "../../api/auth/login";

export async function onLogin(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const data = await login({ email,  password });
    const accessToken = data.data?.accessToken;
    console.log('Login response:', data);
    if (accessToken) {
    localStorage.setItem('accessToken', accessToken);
    console.log('Token stored:', localStorage.getItem('accessToken'));

    setTimeout(() => {
      window.location.href = '/';
    }, 500);
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

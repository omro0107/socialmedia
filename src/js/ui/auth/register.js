import { register } from '../../api/auth/register';

export async function onRegister(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const data = await register({ name, email, password });
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

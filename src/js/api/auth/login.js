import { API_AUTH_LOGIN } from "../constants";
import { headers } from "../headers";

export async function login({ email, password }) {
  try {
    const response = await fetch(`${API_AUTH_LOGIN}`, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Login response:', data)
      return data;
    } else {
      throw new Error("Invalid email or password");
    }
  } catch (error) {
    console.error('Error logging in.', error);
    throw error;
  }
}
import { API_AUTH_LOGIN } from "../constants";

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
      return data;
    } else {
      throw new Error("Invalid email or password");
    }
  } catch (error) {
    console.error('Error logging in.', error);
    throw error;
  }
}
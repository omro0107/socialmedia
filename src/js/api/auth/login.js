export async function login({ email, password }) {
  try {
    const response = await fetch(`${API_AUTH_LOGIN}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("token", data.token);
      return data;
    } else {
      throw new Error("Invalid email or password");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}
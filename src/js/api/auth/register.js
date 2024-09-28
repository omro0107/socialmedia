export async function register({
  name,
  email,
  password,
  bio,
  banner,
  avatar,
}) {
  try {
    const response = await fetch(`${API_AUTH_REGISTER}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        bio,
        banner,
        avatar,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Profile already exists");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
  }

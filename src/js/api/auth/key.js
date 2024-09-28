import { API_AUTH_KEY } from "../constants";

export async function getKey(name) {
  try {
    const response = await fetch(`${API_AUTH_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Noroff-API-Key": "95eba52b-2dfe-4ac9-a86f-2e6c5839164a",
      },
      body: JSON.stringify({
        name,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Failed to get key");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}
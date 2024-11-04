// src/js/utilities/doFetch.js
import { headers } from "../api/headers";

export async function doFetch(url) {
  try {
    const response = await fetch(url, {
      headers: headers(),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
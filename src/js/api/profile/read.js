import { API_SOCIAL_PROFILES } from "../constants";
import { headers } from "../headers";

export async function readProfile(username) {
  try {
    const response = await fetch(`${API_SOCIAL_PROFILES}/${username}`, {
      method: "GET",
      headers: headers(),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function readProfiles(limit, page) {
  try {
    const response = await fetch(`${API_SOCIAL_PROFILES}?limit=${limit}&page=${page}`, {
      method: "GET",
      headers: headers(),
    });
    const data = await response.json();
  } catch (error) {
    console.error(error);
  }
}

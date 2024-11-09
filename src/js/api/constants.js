// Use Postman, or JavaScript to get your API key
// In Workflow we will learn how to secure this information
export const API_KEY = "140f2610-00d2-4340-ae4b-ae109ee190dc";

export const accessToken = localStorage.getItem("accessToken");

export const API_BASE_URL = "https://v2.api.noroff.dev";

export const fetchId = new URLSearchParams(window.location.search).get("id");

export const API_AUTH = `${API_BASE_URL}/auth`;

export const API_AUTH_LOGIN = `${API_AUTH}/login`;

export const API_AUTH_REGISTER = `${API_AUTH}/register`;

export const API_AUTH_KEY = `${API_AUTH}/create-api-key`;

export const API_SOCIAL = `${API_BASE_URL}/social`;

export const API_SOCIAL_POSTS = `${API_SOCIAL}/posts`;

export const API_SOCIAL_PROFILES = `${API_SOCIAL}/profiles`;

export const API_SOCIAL_SELECTED_POST = `${API_SOCIAL}/posts/${fetchId}`;

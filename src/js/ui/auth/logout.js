export async function logout() {
  try {
    localStorage.clear();

    window.location.href = "/auth/login/";
    
  } catch (error) {
    console.error(error);
  }
}
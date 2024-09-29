// This function controls which JavaScript file is loaded on which page
// In order to add additional pages, you will need to implement them below
// You may change the behaviour or approach of this file if you choose
export default async function router(pathname = window.location.pathname) {
  let pageLoaded = false;
  
  switch (pathname) {
    case "/":
      await import("./views/home.js");
      pageLoaded = true;
      break;
    case "/auth/":
      await import("./views/auth.js");
      pageLoaded = true;
      break;
    case "/auth/login/":
      await import("./views/login.js");
      pageLoaded = true;
      break;
    case "/auth/register/":
      await import("./views/register.js");
      pageLoaded = true;
      break;
    case "/post/":
      await import("./views/post.js");
      pageLoaded = true;
      break;
    case "/post/edit/":
      await import("./views/postEdit.js");
      pageLoaded = true;
      break;
    case "/post/create/":
      await import("./views/postCreate.js");
      pageLoaded = true;
      break;
    case "/profile/":
      await import("./views/profile.js");
      pageLoaded = true;
      break;
  }

  if (!pageLoaded) {
      await import("./views/notFound.js");
  }
}

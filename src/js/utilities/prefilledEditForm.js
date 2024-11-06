import { API_SOCIAL_SELECTED_POST } from "../api/constants";
import { headers } from "../api/headers";
import { readSinglePost } from "../api/post/read";

export async function prefillEditForms() {
  const data = await readSinglePost();

  if (data) {
    document.getElementById("urlForm").value = data.media?.url || "";
    document.getElementById("titleForm").value = data.title;
    document.getElementById("bodyContent").value = data?.body || "";
    document.getElementById("tagsForm").value = data?.tags || "";
    document.getElementById("altTagForm").value = data.media?.alt || "";
  }

  console.log("Form pre-filled with:", {
    title: document.getElementById("titleForm").value,
    body: document.getElementById("bodyContent").value,
    url: document.getElementById("urlForm").value,
    alt: document.getElementById("altTagForm").value,
    tags: document.getElementById("tagsForm").value,
  });
}
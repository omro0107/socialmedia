import { readSinglePost } from "../../api/post/read";
import { displaySinglePost } from "../../utilities/displaySinglePost";

const readPost = await readSinglePost();
displaySinglePost(readPost);
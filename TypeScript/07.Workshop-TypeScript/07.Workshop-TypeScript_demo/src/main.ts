import { CONFIG } from "./constants";
import { PostService } from "./services/postService";
import { UserService } from "./services/userService";
import "./style.css";

const root = document.querySelector<HTMLDivElement>("#app");

const { baseUrl } = CONFIG;
const postService = new PostService(baseUrl);
const userService = new UserService(baseUrl);

if (root) {
  root!.innerHTML = `
  <div>
  <h1>Hello, workshop!</div>
  </div>
  `;
}

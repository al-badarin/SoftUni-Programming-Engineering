import { RouterMap } from "./types/router";
import { homePage } from "./views/home";
import { postPage } from "./views/post";
import { userPage } from "./views/user";

export const router: RouterMap = {
  "/": homePage,
  "/user": userPage,
  "/post": postPage,
};

import { CONFIG } from "./constants";
import { PostService } from "./services/postService";
import { UserService } from "./services/userService";
import "./style.css";
import { UserDetails } from "./types/user";

/** Handling the data */
const { baseUrl } = CONFIG;
const postService = new PostService(baseUrl);
const userId = 3;

/** Read All - Posts */
postService.getAll().then((data) => {
  console.log("posts ", data);
});

/** Read All - Users */
const userService = new UserService(baseUrl);
userService.getAll().then((data) => {
  console.log("user ", data);
});

/** Read One */
userService.getSingleUser(userId, (id: number) => {
  postService.getUserPosts(id).then((data): void => {
    console.log("user's posts ", data[0]);
  });
});

userService.getOne(userId).then((data) => {
  console.log("single user ", data);
});

const user: UserDetails = {
  id: 33,
  name: "Jamal Al Badarin",
  username: "al.badarin22",
  email: "Pesho@april.biz",
  address: {
    street: "Nadezhda",
    suite: "4",
    city: "Kazanlak",
    zipcode: "6100",
    geo: { lat: "233423", lng: "23425" },
  },
  phone: "0876123123123",
  website: "albadarin.org",
  company: {
    name: "SoftUni",
    catchPhrase: "soft",
    bs: "afsdfwe",
  },
};

/** Create */
userService.create(user).then((res) => {
  console.log("new user created: ", { res });
});

/** Update */

/** Delete */
userService.delete(userId).then((user) => {
  console.log("delete", user);
});

/** Rendering of the views */
// TODO:
// const root = document.querySelector<HTMLDivElement>("#root");
// HtmlUtil.render(root);

const root = document.querySelector<HTMLDivElement>("#app");
if (root) {
  root!.innerHTML = `
  <div>
  <h1>Hello, workshop!</div>
  </div>
  `;
}

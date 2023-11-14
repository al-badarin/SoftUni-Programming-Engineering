import page from "../node_modules/page/page.mjs";
import { updateNav } from "./utils.js";
import { catalogView } from "./views/catalogView.js";

updateNav();

page("/", catalogView);
page.start();
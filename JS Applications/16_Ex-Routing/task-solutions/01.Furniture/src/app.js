import page from "../node_modules/page/page.mjs";
import { catalogView } from "./views/catalogView.js";
import { detailsView } from "./views/detailsView.js";
import { updateNav } from './utils.js'

updateNav();

page("/", catalogView);
page("/details/:id", detailsView);
// page("/edit/:id", editView);
// page("/login", loginView);
page.start();
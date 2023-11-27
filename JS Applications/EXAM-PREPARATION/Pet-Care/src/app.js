import page from "../node_modules/page/page.mjs";
import { renderContentMiddleware, renderNavigationMiddleware } from "./middlewares/renderMiddleware.js";
import {authMiddleware} from "./middlewares/authMiddleware.js";
import { loginView } from "./views/loginView.js";
import { homeView } from "./views/homeView.js";
import { logoutView } from "./views/logoutView.js";
import { registerView } from "./views/registerView.js";
import { catalogView } from "./views/catalogView.js";
import { createView } from "./views/createView.js";

page(authMiddleware);
page(renderContentMiddleware);
page(renderNavigationMiddleware);

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);
page('/create', createView);
page('/catalog', catalogView);

page.start();
import page from "../node_modules/page/page.mjs";
import { authMiddleware } from './middlewares/authMiddleware.js';
import { renderContentMiddleware, renderNavigationMiddleware } from "./middlewares/renderMiddleware.js";
import { logout } from "./services/userService.js";
import { catalogView } from "./views/catalogView.js";
import { createView } from "./views/createView.js";
import { homeView } from "./views/homeView.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/registerView.js";

page(authMiddleware);
page(renderContentMiddleware);
page(renderNavigationMiddleware);

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logout);
page('/catalog', catalogView);
page('/create', createView);

page.start();
import page from "../node_modules/page/page.mjs";
import { authMiddleware } from './middlewares/authMiddleware.js';
import { renderContentMiddleware, renderNavigationMiddleware } from './middlewares/renderMiddleware.js';
import { homeView } from "./views/homeView.js";
import { loginView } from "./views/loginView.js";

page(authMiddleware);
page(renderContentMiddleware);
page(renderNavigationMiddleware);

page('/', homeView);
page('/login', loginView);
// page('/register', registerView);
// page('/logout', logoutView);

page.start();
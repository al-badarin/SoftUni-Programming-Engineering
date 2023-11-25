import page from "../node_modules/page/page.mjs";
import { authMiddleware } from './middlewares/authMiddleware.js';
import { renderContentMiddleware, renderNavigationMiddleware } from "./middlewares/renderMiddleware.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/registerView.js";

page(authMiddleware);
page(renderContentMiddleware);
page(renderNavigationMiddleware);

page('/login', loginView);
page('/register', registerView);

page.start();
import { renderContentMiddleware, renderNavigationMiddleware } from './middlewares/renderMiddleware.js';

import page from "../node_modules/page/page.mjs";

import { loginView } from "./views/loginView.js";
import { registerView } from './views/registerView.js';
import { homeView } from './views/homeView.js';
import { authMiddleware } from './middlewares/authMiddleware.js';
import { logoutView } from './views/logoutView.js';

page(authMiddleware);
page(renderContentMiddleware);
page(renderNavigationMiddleware);

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);

page.start();
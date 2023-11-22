import { renderContentMiddleware, renderNavigationMiddleware } from './middlewares/renderMiddleware.js';

import page from "../node_modules/page/page.mjs";

import { loginView } from "./views/loginView.js";
import { registerView } from './views/registerView.js';

page(renderContentMiddleware);
page(renderNavigationMiddleware);

page('/login', loginView);
page('/register', registerView);

page.start();
import page from "../node_modules/page/page.mjs";
import { renderContentMiddleware, renderNavigationMiddleware } from './middlewares/renderMiddleware.js';
import { loginView } from "./views/loginView.js";

page(renderContentMiddleware);
page(renderNavigationMiddleware);

page('/login', loginView);

page.start();
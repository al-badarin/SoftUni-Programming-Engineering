import page from "../node_modules/page/page.mjs";
import { authMiddleware } from './middlewares/authMiddleware.js';
import { renderContentMiddleware, renderNavigationMiddleware } from "./middlewares/renderMiddleware.js";

page(authMiddleware);
page(renderContentMiddleware);
page(renderNavigationMiddleware);


page.start();
import page from "../node_modules/page/page.mjs";
import { renderContentMiddleware, renderNavigationMiddleware } from "./middlewares/renderMiddleware.js";
import {authMiddleware} from "./middlewares/authMiddleware.js";

page(authMiddleware);
page(renderContentMiddleware);
page(renderNavigationMiddleware);


page.start();
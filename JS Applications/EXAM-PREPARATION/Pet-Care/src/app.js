import page from "../node_modules/page/page.mjs";
import { renderContentMiddleware, renderNavigationMiddleware } from "./middlewares/renderMiddleware.js";
import {authMiddleware} from "./middlewares/authMiddleware.js";
import { loginView } from "./views/loginView.js";

page(authMiddleware);
page(renderContentMiddleware);
page(renderNavigationMiddleware);

page('/login', loginView);

page.start();
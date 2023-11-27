import page from "../node_modules/page/page.mjs";
import { renderContentMiddleware, renderNavigationMiddleware } from "./middlewares/renderMiddleware.js";
import {authMiddleware} from "./middlewares/authMiddleware.js";
import { loginView } from "./views/loginView.js";
import { homeView } from "./views/homeView.js";

page(authMiddleware);
page(renderContentMiddleware);
page(renderNavigationMiddleware);

page('/', homeView);
page('/login', loginView);

page.start();
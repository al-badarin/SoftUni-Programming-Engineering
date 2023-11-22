import page from "../node_modules/page/page.mjs";
import { navigationView } from "./views/navigationView.js";
import { renderContentMiddleware } from './middlewares/renderMiddleware.js';

page(renderContentMiddleware);
page(navigationView);

page.start();
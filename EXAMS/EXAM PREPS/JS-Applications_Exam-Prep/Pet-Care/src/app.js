import page from "../node_modules/page/page.mjs";
import { renderContentMiddleware, renderNavigationMiddleware } from "./middlewares/renderMiddleware.js";
import { authMiddleware } from "./middlewares/authMiddleware.js";
import { loginView } from "./views/loginView.js";
import { homeView } from "./views/homeView.js";
import { logoutView } from "./views/logoutView.js";
import { registerView } from "./views/registerView.js";
import { catalogView } from "./views/catalogView.js";
import { createView } from "./views/createView.js";
import { detailsView } from "./views/detailsView.js";
import { deleteView } from "./views/deleteView.js";
import { editView } from "./views/editView.js";

page(authMiddleware);
page(renderContentMiddleware);
page(renderNavigationMiddleware);

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);
page('/create', createView);
page('/catalog', catalogView);
page('/pets/:petId', detailsView);
page('/pets/:petId/edit', editView);
// page('/pets/:petId/delete', deleteView);

page.start();
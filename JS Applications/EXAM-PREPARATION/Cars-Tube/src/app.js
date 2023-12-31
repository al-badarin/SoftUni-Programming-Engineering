import { renderContentMiddleware, renderNavigationMiddleware } from './middlewares/renderMiddleware.js';

import page from "../node_modules/page/page.mjs";

import { loginView } from "./views/loginView.js";
import { registerView } from './views/registerView.js';
import { homeView } from './views/homeView.js';
import { authMiddleware } from './middlewares/authMiddleware.js';
import { logoutView } from './views/logoutView.js';
import { catalogView } from './views/catalogView.js';
import { createView } from './views/createView.js';
import { detailsView } from './views/detailsView.js';
import { editView } from './views/editView.js';
import { deleteView } from './views/deleteView.js';
import { myListingsView } from './views/myListingsView.js';
import { searchView } from './views/searchView.js';

page(authMiddleware);
page(renderContentMiddleware);
page(renderNavigationMiddleware);

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);
page('/catalog', catalogView);
page('/create', createView);
page('/search', searchView);
page('/profile', myListingsView);
page('/cars/:carId', detailsView);
page('/cars/:carId/edit', editView);
page('/cars/:carId/delete', deleteView);

page.start();
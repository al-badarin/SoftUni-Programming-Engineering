import page from '../node_modules/page/page.mjs';
import { authMiddleware } from './middlewares/authMiddleware.js';
import { renderContentMiddleware, renderNavigationMiddleware } from './middlewares/renderMiddleware.js';
import { catalogView } from './views.js/catalogView.js';
import { createView } from './views.js/createView.js';
import { detailsView } from './views.js/detailsView.js';
import { editView } from './views.js/editView.js';
import { loginView } from './views.js/loginView.js';
import { logoutView } from './views.js/logoutView.js';
import { registerView } from './views.js/registerView.js';

page(authMiddleware);
page(renderContentMiddleware);
page(renderNavigationMiddleware);

page('/', catalogView);
page('/register', registerView);
page('/login', loginView);
page('/logout', logoutView);
page('/create', createView);
page('/furnitures/:furnitureId', detailsView);
page('/furnitures/:furnitureId/edit', editView);
// page('/furnitures/:furnitureId/delete', deleteView);

page.start();
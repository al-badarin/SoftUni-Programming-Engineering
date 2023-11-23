import page from '../node_modules/page/page.mjs';
import { authMiddleware } from './middlewares/authMiddleware.js';
import { renderContentMiddleware } from './middlewares/renderMiddleware.js';
import { createView } from './views.js/createView.js';
import { loginView } from './views.js/loginView.js';
import { logoutView } from './views.js/logoutView.js';
import { registerView } from './views.js/registerView.js';

page(authMiddleware);
page(renderContentMiddleware);

page('/register', registerView);
page('/login', loginView);
page('/logout', logoutView);
page('/create', createView);

page.start();
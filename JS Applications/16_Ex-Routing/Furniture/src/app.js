import page from '../node_modules/page/page.mjs';
import { authMiddleware } from './middlewares/authMiddleware.js';
import { renderContentMiddleware } from './middlewares/renderMiddleware.js';
import { loginView } from './views.js/loginView.js';
import { registerView } from './views.js/registerView.js';

page(authMiddleware);
page(renderContentMiddleware);

page('/login', loginView);
page('/register', registerView);

page.start();
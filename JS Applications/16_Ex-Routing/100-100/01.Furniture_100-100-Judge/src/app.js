import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';
import { getUserData } from './util.js';
import { layoutTemplate } from './views/layout.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { logout } from './data/auth.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { myFurniture } from './views/myFurniture.js';

// TODO change root depending project
const root = document.body;

page(decorateContext);
// page('index.html', '/');
page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/logout', logoutAction);
page('/create', createPage);
page('/myFurniture', myFurniture)
page('/details/:id', detailsPage);
page('/edit/:id', editPage);


page.start();

function decorateContext(ctx, next) {
    ctx.render = renderView;
    next();
}

// TODO inject dependancies
function renderView(content) {
   
    const userData = getUserData();
    
    render(layoutTemplate(userData, content), root)
}


function logoutAction(ctx){
    logout();
    ctx.page.redirect('/');
}
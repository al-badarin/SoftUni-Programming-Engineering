import { showHome } from './views/home.js';
import { showCatalog } from './views/catalog.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';
import { showDetails } from './views/details.js';
import { showCreate } from './views/create.js';
import { initialize } from './router.js'

document.getElementById('views').remove;

const links = {
    '/': showHome,
    '/catalog': showCatalog,
    '/login': showLogin,
    '/register': showRegister,
    '/detail': showDetails,
    '/create': showCreate,
};

const router = initialize(links);

//Start application in home view
router.goTo('/');
import { showHome } from './views/home.js';
import { showCatalog } from './views/catalog.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';
import { showDetails } from './views/details.js';
import { showCreate } from './views/create.js';


const main = document.querySelector('main');
document.getElementById('views').remove;

document.querySelector('nav').addEventListener('click', onNavigate);

const links = {
    '/': showHome,
    '/catalog': showCatalog,
    '/login': showLogin,
    '/register': showRegister,
    '/detail': showDetails,
    '/create': showCreate,
};

const context = {
    showSection
};

function showSection(section) {
    main.replaceChildren(section);
}

function onNavigate(event) {
    let target = event.target;
    if (target.tagName == 'IMG') {
        target = target.parentElement;
    }

    if (target.tagName == 'A') {
        event.preventDefault();
        const url = new URL(target.href);
        const handler = links[url.pathname];
        if (typeof handler == 'function') {
            handler(context);
        }
    }
}
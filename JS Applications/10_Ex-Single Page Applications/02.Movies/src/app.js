import { homePage } from "./home.js";
import { loginPage } from "./login.js";
import { registerPage } from "./register.js";
import { updateNavBar } from "./util.js";

const routes = {
    '/': homePage,
    '/login': loginPage,
    '/register': registerPage,
}

document.querySelector('nav').addEventListener('click', onNavigate);

function onNavigate(event){
    if(event.target.tagName === 'A' && event.target.href){
        event.preventDefault();

        const url = new URL(event.target.href);

        const view = routes[url.pathname];

        view();
    }
}

updateNavBar();
homePage();
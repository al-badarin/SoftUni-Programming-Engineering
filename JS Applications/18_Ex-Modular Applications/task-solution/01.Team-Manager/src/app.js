import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { getUserData } from './utils.js';
import { showHome } from './view/home.js';
import { showLogin } from './view/login.js';
import { showTeams } from './view/teams.js';


const navTemplate = (user) => html`
    <a href="/teams" class="action">Browse Teams</a>
    ${user
        ? html`
        <a href="/myTeams" class="action">My Teams</a>
        <a href="/logout" class="action">Logout</a>`
        : html`
    <a href="/login" class="action">Login</a>
    <a href="/register" class="action">Register</a>`
    }
`;

function updateNav(ctx, next) {
    render(navTemplate(ctx.user), document.querySelector('nav'));
    next();
}


function session(ctx, next) {
    const user = getUserData();
    console.log('user:', user);
    if (user) {
        ctx.user = user;
    }
    next();
}


function decorateContext(ctx, next) {
    ctx.render = function (content) {
        render(content, document.querySelector('main'));
    }
    next();
}


page(session);
page(decorateContext);
page(updateNav);

page('/', showHome);
page('/teams', showTeams);
page('/login', showLogin);

page.start()
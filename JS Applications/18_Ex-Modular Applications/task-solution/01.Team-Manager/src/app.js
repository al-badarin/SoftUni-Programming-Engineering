import {html, render} from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { getUserData } from './utils.js';
import { showHome } from './view/home.js';
import { showLogin } from './view/login.js';
import { showTeams } from './view/teams.js';


function session(ctx, next){
    const user = getUserData();
    if (user){
        ctx.user = user;
    }
    next();
}

function decorateContext(ctx, next){
    ctx.render = function (content){
        render(content, document.querySelector('main'));
    }
    next();
}


page(session);
page(decorateContext);

page('/', showHome);
page('/teams', showTeams);
page('/login', showLogin);

page.start()
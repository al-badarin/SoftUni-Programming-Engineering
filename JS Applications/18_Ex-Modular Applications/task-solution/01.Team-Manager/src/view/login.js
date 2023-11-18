import {html, render} from '../../node_modules/lit-html/lit-html.js';

const loginTemplate = () => html`
<p>LOGIN PAGE</p>
`;

export function showLogin(ctx){
    ctx.render(loginTemplate());
}
import { html, render } from '../../node_modules/lit-html/lit-html.js';

const detailsTemplate = (user) => html`
    <h1>TEAM DETAILS PAGE</h1>
`;

export function showDetails(ctx) {
    ctx.render(detailsTemplate(ctx.user));
}
import {html, render} from '../../node_modules/lit-html/lit-html.js';

const teamsTemplate = () => html`
<p>TEAMS PAGE</p>
`;

export function showTeams(ctx){
    ctx.render(teamsTemplate());
}
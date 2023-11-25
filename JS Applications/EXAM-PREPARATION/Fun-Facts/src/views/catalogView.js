import { html, nothing, render } from '../../node_modules/lit-html/lit-html.js';

import * as funFactsService from '../services/funFactsService.js';
import { funFactsTemplate } from '../templates/funFactsTemplate.js';

const catalogTemplate = (facts = [], user) => html`
    <h2>Fun Facts</h2>
    <section id="dashboard">
    
        ${facts.map(f => funFactsTemplate(f, Boolean(user)))}

        ${facts.length == 0
            ? html`<h2>No Fun Facts yet.</h2>`
            : nothing
        }

    </section>
`;

export const catalogView = (ctx) => {
    funFactsService.getAll()
    .then(facts => {
        ctx.render(catalogTemplate(facts, ctx.user));
    });
}
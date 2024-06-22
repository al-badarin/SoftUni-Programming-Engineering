import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as characterService from '../services/characterService.js';
import { characterTemplate } from '../templates/characterTemplate.js';

const catalogTemplate = (characters, user) => html`
    <h2>Characters</h2>
    <section id="characters">

    ${characters.map(ch => characterTemplate(ch))}

    ${characters.length == 0
        ? html`<h2>No added Heroes yet.</h2>`
        : nothing
    }
    
    </section>
`;

export const catalogView = (ctx) => {
    characterService.getAll()
        .then(characters => {
            ctx.render(catalogTemplate(characters, ctx.user));
        });
};
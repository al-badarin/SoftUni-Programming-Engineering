import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as albumService from '../services/albumService.js';
import { albumTemplate } from '../templates/albumTemplate.js';

const catalogTemplate = (albums, user) => html`
    <section id="dashboard">
    <h2>Albums</h2>
    <ul class="card-wrapper">
        ${albums.map(a => albumTemplate(a))}
    </ul>

    ${albums.length == 0
        ? html `<h2>There are no albums added yet.</h2>`
        : nothing
    }
    </section>
`;

export const catalogView = (ctx) => {
    albumService.getAll()
        .then(albums => {
            ctx.render(catalogTemplate(albums, ctx.user));
        });
};
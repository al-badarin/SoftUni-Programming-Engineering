import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as albumService from '../services/albumService.js';
import { albumTemplate } from '../templates/albumTemplate.js';

//TODO: ADD THE TEMPLATE
const catalogTemplate = (albums, user) => html`
    
`;

export const catalogView = (ctx) => {
    albumService.getAll()
        .then(albums => {
            ctx.render(catalogTemplate(albums, ctx.user));
        });
};
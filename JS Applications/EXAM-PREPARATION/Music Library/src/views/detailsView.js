import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as albumService from '../services/albumService.js';

//TODO: ADD THE TEMPLATE
const detailsTemplate = (album, isOwner, isLogged) => html`
    
`;

export const detailsView = (ctx) => {
    let isLogged = Boolean(ctx.user);

    albumService.getOne(ctx.params.albumId)
        .then(album => {
            let isOwner = album._ownerId == ctx.user?._id;

            ctx.render(detailsTemplate(album, isOwner, isLogged));
        });
};
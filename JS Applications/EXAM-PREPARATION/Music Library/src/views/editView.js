import { html } from '../../node_modules/lit-html/lit-html.js';
import * as albumService from '../services/albumService.js';

//TODO: ADD THE TEMPLATE
// @submit=${submitHandler}
const editTemplate = (album, submitHandler) => html`
    
`;

export const editView = (ctx) => {
    const albumId = ctx.params.albumId;

    const submitHandler = (e) => {
        e.preventDefault();

        let albumData = new FormData(e.currentTarget);
        //TODO: CHECK THE "name" fields in the template
        const { model, imageUrl, year, mileage, contact, about } = Object.fromEntries(albumData);

        if (model == '' ||
            imageUrl == '' ||
            year == '' ||
            mileage == '' ||
            contact == '' ||
            about == '') {
            alert('All fields must be filled!');
            return;
        }
        albumService.edit(albumId, model, imageUrl, year, mileage, contact, about)
            .then(() => {
                ctx.page.redirect(`/albums/${albumId}`);
            });
    }
    albumService.getOne(albumId)
        .then(album => {
            ctx.render(editTemplate(album, submitHandler));
        });
};
import { html } from '../../node_modules/lit-html/lit-html.js';
import * as albumService from '../services/albumService.js';

//TODO: ADD THE TEMPLATE
// @submit=${submitHandler}
const createTemplate = (submitHandler) => html`
    
`;

export const createView = (ctx) => {
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
        albumService.create(model, imageUrl, year, mileage, contact, about)
            .then(() => {
                ctx.page.redirect('/catalog');
            })
            .catch(err => {
                alert(err);
            });
    }
    ctx.render(createTemplate(submitHandler));
};
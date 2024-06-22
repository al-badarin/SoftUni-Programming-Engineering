import { html } from '../../node_modules/lit-html/lit-html.js';
import * as characterService from '../services/characterService.js';

const createTemplate = (submitHandler) => html`
    <section id="create">
    <div class="form">
        <img class="border" src="./images/border.png" alt="">
        <h2>Add Character</h2>
        <form class="create-form" @submit=${submitHandler}>
        <input type="text" name="category" id="category" placeholder="Character Type" />
        <input type="text" name="image-url" id="image-url" placeholder="Image URL" />
        <textarea id="description" name="description" placeholder="Description" rows="2" cols="10"></textarea>
        <textarea id="additional-info" name="additional-info" placeholder="Additional Info" rows="2" cols="10"></textarea>
        <button type="submit">Add Character</button>
        </form>
        <img class="border" src="./images/border.png" alt="">
    </div>
    </section>
`;

export const createView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();

        let characterData = new FormData(e.currentTarget);
        const { category, ['image-url']: imageUrl, description, ['additional-info']: moreInfo } = Object.fromEntries(characterData);

        if (category == '' ||
            imageUrl == '' ||
            description == '' ||
            moreInfo == '') {
            alert('All fields must be filled!');
            return;
        }

        characterService.create({ category, imageUrl, description, moreInfo })
            .then(() => {
                ctx.page.redirect('/catalog');
            })
            .catch(err => {
                alert(err);
            });
    }
    ctx.render(createTemplate(submitHandler));
};
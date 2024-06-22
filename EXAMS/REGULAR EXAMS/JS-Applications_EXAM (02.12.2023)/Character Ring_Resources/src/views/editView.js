import { html } from '../../node_modules/lit-html/lit-html.js';
import * as characterService from '../services/characterService.js';

const editTemplate = (character, submitHandler) => html`
    <section id="edit">
    <div class="form">
        <img class="border" src="./images/border.png" alt="">
        <h2>Edit Character</h2>
        <form class="edit-form" @submit=${submitHandler}>
        <input type="text" name="category" id="category" placeholder="Character Type" .value="${character.category}"/>
        <input type="text" name="image-url" id="image-url" placeholder="Image URL" .value="${character.imageUrl}"/>
        <textarea id="description" name="description" placeholder="Description" rows="2" cols="10" .value="${character.description}"></textarea>
        <textarea id="additional-info" name="additional-info" placeholder="Additional Info" rows="2" cols="10" .value="${character.moreInfo}"></textarea>
        <button type="submit">Edit</button>
        </form>
        <img class="border" src="./images/border.png" alt="">
    </div>
    </section>
`;

export const editView = (ctx) => {
    const characterId = ctx.params.characterId;

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

        characterService.edit(characterId, { category, imageUrl, description, moreInfo })
            .then(() => {
                ctx.page.redirect(`/characters/${characterId}`);
            });
    }
    characterService.getOne(characterId)
        .then(character => {
            ctx.render(editTemplate(character, submitHandler));
        });
};
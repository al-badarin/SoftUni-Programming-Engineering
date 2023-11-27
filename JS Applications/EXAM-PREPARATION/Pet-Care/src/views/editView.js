import { html } from '../../node_modules/lit-html/lit-html.js';
import * as petService from '../services/petService.js';
import { petDataIsInvalid } from '../utils/validator.js';

const editTemplate = (pet, submitHandler) => html`
    <section id="editPage">
        <form class="editForm" @submit=${submitHandler}>
            <img src="./images/editpage-dog.jpg">
            <div>
                <h2>Edit PetPal</h2>
                <div class="name">
                    <label for="name">Name:</label>
                    <input name="name" id="name" type="text" value="${pet.name}">
                </div>
                <div class="breed">
                    <label for="breed">Breed:</label>
                    <input name="breed" id="breed" type="text" value="${pet.breed}">
                </div>
                <div class="Age">
                    <label for="age">Age:</label>
                    <input name="age" id="age" type="text" value="${pet.age}">
                </div>
                <div class="weight">
                    <label for="weight">Weight:</label>
                    <input name="weight" id="weight" type="text" value="${pet.weight}">
                </div>
                <div class="image">
                    <label for="image">Image:</label>
                    <input name="image" id="image" type="text" value="${pet.image}">
                </div>
                <button class="btn" type="submit">Edit Pet</button>
            </div>
        </form>
    </section>
`;

export const editView = (ctx) => {
    const petId = ctx.params.petId;

    const submitHandler = (e) => {
        e.preventDefault();

        let petData = Object.fromEntries(new FormData(e.currentTarget));

        if (petDataIsInvalid(petData)) {
            alert('All fields should be filled!');
            return;
        }

        petService.edit(petId, petData)
            .then(() => {
                ctx.page.redirect(`/pets/${petId}`)
            });
    }

    petService.getOne(petId)
        .then(pet => {
            ctx.render(editTemplate(pet, submitHandler));
        });
};
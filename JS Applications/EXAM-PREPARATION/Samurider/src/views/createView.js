import { html } from '../../node_modules/lit-html/lit-html.js';
import * as motorService from '../services/motorService.js';

const createTemplate = (submitHandler) => html`
    <section id="create">
    <h2>Add Motorcycle</h2>
    <div class="form">
        <h2>Add Motorcycle</h2>
        <form class="create-form" @submit=${submitHandler}>
        <input type="text" name="model" id="model" placeholder="Model" />
        <input type="text" name="imageUrl" id="moto-image" placeholder="Moto Image" />
        <input type="number" name="year" id="year" placeholder="Year" />
        <input type="number" name="mileage" id="mileage" placeholder="mileage" />
        <input type="text" name="contact" id="contact" placeholder="contact" />
        <textarea id="about" name="about" placeholder="about" rows="10" cols="50"></textarea>
        <button type="submit">Add Motorcycle</button>
        </form>
    </div>
    </section>
`;

export const createView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();

        let motorData = new FormData(e.currentTarget);
        const { model, imageUrl, year, mileage, contact, about } = Object.fromEntries(motorData);

        if (model == '' ||
            imageUrl == '' ||
            year == '' ||
            mileage == '' ||
            contact == '' ||
            about == '') {
            alert('All fields must be filled!');
            return;
        }
        motorService.create(motorData)
            .then(() => {
                ctx.page.redirect('/catalog');
            })
            .catch(err => {
                alert(err);
            });
    }
    ctx.render(createTemplate(submitHandler));
};
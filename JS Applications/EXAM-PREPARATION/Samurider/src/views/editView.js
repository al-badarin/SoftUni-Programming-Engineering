import { html } from '../../node_modules/lit-html/lit-html.js';
import * as motorService from '../services/motorService.js';

const editTemplate = (motor, submitHandler) => html`
    <section id="edit">
    <h2>Edit Motorcycle</h2>
    <div class="form">
        <h2>Edit Motorcycle</h2>
        <form class="edit-form" @submit=${submitHandler}>
        <input type="text" name="model" id="model" placeholder="Model" .value="${motor.model}"/>
        <input type="text" name="imageUrl" id="moto-image" placeholder="Moto Image"  .value="${motor.imageUrl}"/>
        <input type="number" name="year" id="year" placeholder="Year" .value="${motor.year}"/>
        <input type="number" name="mileage" id="mileage" placeholder="mileage" .value="${motor.mileage}"/>
        <input type="number" name="contact" id="contact" placeholder="contact" .value="${motor.contact}"/>
        <textarea id="about" name="about" placeholder="about" rows="10" cols="50" .value="${motor.about}"></textarea>
        <button type="submit">Edit Motorcycle</button>
        </form>
    </div>
    </section>
`;

export const editView = (ctx) => {
    const motorId = ctx.params.motorId;

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
        motorService.edit(motorId, motorData)
            .then(() => {
                ctx.page.redirect(`/motors/${motorId}`);
            });
    }
    motorService.getOne(motorId)
        .then(motor => {
            ctx.render(editTemplate(motor, submitHandler));
        });
};
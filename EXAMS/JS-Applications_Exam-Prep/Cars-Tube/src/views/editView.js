import { html, nothing } from '../../node_modules/lit-html/lit-html.js';

import { carIsInvalid } from '../utils/validator.js';
import * as carService from '../services/carService.js';

const editTemplate = (car, submitHandler) => html`
    <section id="edit-listing">
        <div class="container">

            <form id="edit-form" @submit=${submitHandler} method="POST">
                <h1>Edit Car Listing</h1>
                <p>Please fill in this form to edit an listing.</p>
                <hr>

                <p>Car Brand</p>
                <input type="text" placeholder="Enter Car Brand" name="brand" value="${car.brand}">

                <p>Car Model</p>
                <input type="text" placeholder="Enter Car Model" name="model" value="${car.model}">

                <p>Description</p>
                <input type="text" placeholder="Enter Description" name="description" value="${car.description}">

                <p>Car Year</p>
                <input type="number" placeholder="Enter Car Year" name="year" value="${car.year}">

                <p>Car Image</p>
                <input type="text" placeholder="Enter Car Image" name="imageUrl" value="${car.imageUrl}">

                <p>Car Price</p>
                <input type="number" placeholder="Enter Car Price" name="price" value="${car.price}">

                <hr>
                <input type="submit" class="registerbtn" value="Edit Listing">
            </form>
        </div>
    </section>
`;

export const editView = (ctx) => {
    const carId = ctx.params.carId;

    const submitHandler = (e) => {
        e.preventDefault();

        let carData = Object.fromEntries(new FormData(e.currentTarget));
       
        carData.year = Number(carData.year);
        carData.price = Number(carData.price);

        if (carIsInvalid(carData)) {
            alert('All fields should be filled!');
            return;
        }

        if(carData.year < 0 || carData.price < 0){
            alert('The year and the price of the car must be a positive number!');
            return;
        }

        carService.edit(carId, carData)
            .then(() => {
                ctx.page.redirect(`/cars/${carId}`)
            });
    }
    carService.getOne(carId)
        .then(car => {
            ctx.render(editTemplate(car, submitHandler));
        });
}
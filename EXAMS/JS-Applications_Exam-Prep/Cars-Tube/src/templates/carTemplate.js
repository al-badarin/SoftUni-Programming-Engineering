import { html, nothing, render } from '../../../node_modules/lit-html/lit-html.js';

const carDetails = (car) => html`
    <div class="data-buttons">
        <a href="/cars/${car._id}" class="button-carDetails">Details</a>
    </div>
`;

export const carTemplate = (car, withDetails = true) => html`
    <div class="listing">
        <div class="preview">
            <img src=${car.imageUrl}>
        </div>
        <h2>${car.brand} ${car.model}</h2>
        <div class="info">
            <div class="data-info">
                <h3>Year: ${car.year}</h3>
                <h3>Price: ${car.price} $</h3>
            </div>

            ${withDetails
                ? carDetails(car)
                : nothing
            }
        </div>
    </div>
`;

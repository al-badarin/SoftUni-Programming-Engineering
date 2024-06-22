import { html, nothing } from '../../node_modules/lit-html/lit-html.js';

const motorDetails = (motorId) => html`
    <a class="details-btn" href="/motors/${motorId}">More Info</a>
`;

export const motorTemplate = (motor, withDetails = true) => html`
    <div class="motorcycle">
        <img src=${motor.imageUrl} alt="example1" />
        <h3 class="model">${motor.model}</h3>
        <p class="year">Year: ${motor.year}</p>
        <p class="mileage">Mileage: ${motor.mileage} km.</p>
        <p class="contact">Contact Number: ${motor.contact}</p>
        ${withDetails
            ? motorDetails(motor._id)
            : nothing
        }
    </div>
`;
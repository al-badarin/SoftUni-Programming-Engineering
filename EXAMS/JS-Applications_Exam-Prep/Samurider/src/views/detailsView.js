import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as motorService from '../services/motorService.js';

const detailsTemplate = (motor, isOwner, isLogged) => html`
    <section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${motor.imageUrl} alt="example1" />
        <p id="details-title">${motor.model}</p>
        <div id="info-wrapper">
        <div id="details-description">
            <p class="year">Year: ${motor.year}</p>
            <p class="mileage">Mileage: ${motor.mileage} km.</p>
            <p class="contact">Contact Number: ${motor.contact}</p>
            <p id="motorcycle-description">${motor.about}</p>
        </div>

        ${(isLogged && isOwner)
            ? html`<div id="action-buttons">
            <a href="/motors/${motor._id}/edit" id="edit-btn">Edit</a>
            <a href="/motors/${motor._id}/delete" id="delete-btn">Delete</a>
            </div>`
            : nothing
        }
        </div>
    </div>
    </section>
`;

export const detailsView = (ctx) => {
    let isLogged = Boolean(ctx.user);

    motorService.getOne(ctx.params.motorId)
        .then(motor => {
            let isOwner = motor._ownerId == ctx.user?._id;

            ctx.render(detailsTemplate(motor, isOwner, isLogged));
        });
};
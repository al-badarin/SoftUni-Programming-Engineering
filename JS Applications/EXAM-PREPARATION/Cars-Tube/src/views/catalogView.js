import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { carTemplate } from '../../templates/carTemplate.js';

import * as carService from '../services/carService.js'

const catalogTemplate = (cars, user) => html`
    <section id="car-listings">
        <h1>Car Listings</h1>
        <div class="listings">

            <!-- Display all records -->
            ${cars.map(x => carTemplate(x, Boolean(user)))}

            <!-- Display if there are no records -->
            ${cars.length == 0
                ? html`<p class="no-cars">No cars in database.</p>`
                : nothing
            }
        </div>
    </section>
`;

export const catalogView = (ctx) => {
    carService.getAll()
        .then(cars => {
            ctx.render(catalogTemplate(cars, ctx.user));
        });
}
import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { carTemplate } from '../templates/carTemplate.js';
import * as carService from '../services/carService.js';

const myListingsTemplate = (cars = []) => html`
    <section id="my-listings">
        <h1>My car listings</h1>
        <div class="listings">

            <!-- Display all records -->
            ${cars.map(carTemplate)}
            
            <!-- Display if there are no records -->
            ${cars.length == 0
                ? html`<p class="no-cars"> You haven't listed any cars yet.</p>`
                : nothing
            }
        </div>
    </section>
`;

export const myListingsView = (ctx) => {
    carService.getOwn(ctx.user._id)
        .then(cars => {
            ctx.render(myListingsTemplate(cars));
        });
}


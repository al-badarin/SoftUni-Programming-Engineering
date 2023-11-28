import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as motorService from '../services/motorService.js';
import { motorTemplate } from '../templates/motorTemplate.js';

const catalogTemplate = (motors, user) => html`
    <h2>Available Motorcycles</h2>
    <section id="dashboard">
        ${motors.map(m => motorTemplate(m, Boolean(user)))}
    </section>

        ${motors.length == 0
            ? html`<h2 class="no-avaliable">No avaliable motorcycles yet.</h2>`
            : nothing
        }
`;

export const catalogView = (ctx) => {
    motorService.getAll()
        .then(motors => {
            ctx.render(catalogTemplate(motors, ctx.user));
        });
};
import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as petService from '../services/petService.js';
import { petTemplate } from '../templates/petTamplate.js';

const catalogTemplate = (pets, user) => html`
    <section id="dashboard">
        <h2 class="dashboard-title">Services for every animal</h2>
        <div class="animals-dashboard">

            ${pets.map(p => petTemplate(p))}

            ${pets.length == 0
                ? html`<div><p class="no-pets">No pets in dashboard</p></div>`
                : nothing
            }
            <!--If there is no pets in dashboard-->
           
        </div>
    </section>
`;

export const catalogView = (ctx) => {
    petService.getAll()
        .then(pets => {
            console.log(pets);
            ctx.render(catalogTemplate(pets, ctx.user))
        })
};
import { html, render, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as furnitureService from '../services/furnitureService.js';
import { furnitureTemplate } from '../templates/furnitureTemplate.js';

const myCatalogTemplate = (furnitures) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>My Furniture</h1>
            <p>This is a list of your publications.</p>
        </div>
    </div>

    <div class="row space-top">
        ${furnitures.map(furnitureTemplate)}
    </div>
`;

export const myCatalogView = (ctx) => {
    furnitureService.getOwn(ctx.user._id)
        .then(furnitures => {
            ctx.render(myCatalogTemplate(furnitures));
        })
}
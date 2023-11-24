import { html, render, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as furnitureService from '../services/furnitureService.js';
import { furnitureTemplate } from '../templates/furnitureTemplate.js';

const catalogTemplate = (furnitures, user) => html`
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Welcome to Furniture System</h1>
                <p>Select furniture from the catalog to view details.</p>
            </div>
        </div>
        <div class="row space-top">
            ${furnitures.map(f => furnitureTemplate(f, Boolean(user)))}
        </div>
`

export const catalogView = (ctx) => {
    furnitureService.getAll()
        .then(furnitures => {
            ctx.render(catalogTemplate(furnitures, ctx.user));
        });
};
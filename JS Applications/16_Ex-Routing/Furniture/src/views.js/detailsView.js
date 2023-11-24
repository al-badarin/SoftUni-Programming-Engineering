import { html, render, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as furnitureService from '../services/furnitureService.js';

const detailsTemplate = (furniture, isLogged) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Furniture Details</h1>
        </div>
    </div>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="card text-white bg-primary">
                <div class="card-body">
                    <img src=${furniture.img} />
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <p>Make: <span>${furniture.make}</span></p>
            <p>Model: <span>${furniture.model}</span></p>
            <p>Year: <span>${furniture.year}</span></p>
            <p>Description: <span>${furniture.description}</span></p>
            <p>Price: <span>${furniture.price}</span></p>
            <p>Material: <span>${furniture.material}</span></p>
            
            <!-- Only for registered user and creator of the album-->
            ${(isLogged && furniture._ownerId == furniture._id)
                ? html`<div>
                    <a href=”#” class="btn btn-info">Edit</a>
                    <a href=”#” class="btn btn-red">Delete</a>
                </div>`
                : nothing
            }
            
        </div>
    </div>
`;

export const detailsView = (ctx) =>{
    let isLogged = Boolean(ctx.user);

    furnitureService.getOne(ctx.params.furnitureId)
        .then(furniture => {
            // let isOwner = furniture._ownerId == ctx.user._id;

            ctx.render(detailsTemplate(furniture, isLogged, ctx.user));
        });
};
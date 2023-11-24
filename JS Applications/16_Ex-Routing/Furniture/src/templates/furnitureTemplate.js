import { html, render, nothing } from '../../node_modules/lit-html/lit-html.js';

const furnitureDetails = (furnitureId) => html`
    <div>
        <a href="/furnitures/${furnitureId}" class="btn btn-info">Details</a>
    </div>
`;

export const furnitureTemplate = (furniture, withDetails = true) => html`
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src=${furniture.img} />
                <p>${furniture.description}</p>
                <footer>
                    <p>Price: <span>${furniture.price} $</span></p>
                </footer>
                
                ${withDetails
                    ? furnitureDetails(furniture._id)
                    : nothing
                }

            </div>
        </div>
    </div>
`;
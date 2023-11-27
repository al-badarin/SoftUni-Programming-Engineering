import { html, nothing } from '../../node_modules/lit-html/lit-html.js';

const petDetails = (petId) => html`
    <div class="action">
        <a class="btn" href="/pets/${petId}">Details</a>
    </div>
`;

export const petTemplate = (pet, withDetails = true) => html`
    <div class="animals-board">
        <article class="service-img">
            <img class="animal-image-cover" src=${pet.image}>
        </article>
        <h2 class="name">${pet.name}</h2>
        <h3 class="breed">${pet.bread}</h3>
        
        ${withDetails
            ? petDetails(pet._id)
            : nothing
        }
    </div>
`;
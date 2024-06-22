import { html, nothing } from '../../node_modules/lit-html/lit-html.js';

const characterDetails = (characterId) => html`
    <a class="details-btn" href="/characters/${characterId}">More Info</a>
`;

export const characterTemplate = (character, withDetails = true) => html`
    <div class="character">
        <img src=${character.imageUrl} alt="example1" />
        <div class="hero-info">
        <h3 class="category">${character.category}</h3>
        <p class="description">${character.description}</p>
        ${withDetails
            ? characterDetails(character._id)
            : nothing
        }
        </div>
    </div>
`;
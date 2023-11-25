import { html, nothing, render } from '../../node_modules/lit-html/lit-html.js';

const factDetails = (factId) => html`
    <a class="details-btn" href="/facts/${factId}">More Info</a>
`;
export const funFactsTemplate = (fact, withDetails = true) => html`
    <div class="fact">
        <img src=${fact.imageUrl} alt="example3" />
        <h3 class="category">${fact.category}</h3>
        <p class="description">${fact.description}</p>

            ${withDetails
                ? factDetails(fact._id)
                : nothing
            }
    </div>
`;

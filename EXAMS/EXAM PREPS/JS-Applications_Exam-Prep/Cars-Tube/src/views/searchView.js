import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { carTemplate } from '../templates/carTemplate.js';
import * as carService from '../services/carService.js';

const searchTemplate = (searchHandler, cars, isLogged) => html`
    <section id="search-cars">
        <h1>Filter by year</h1>

        <div class="container">
            <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
            <button class="button-list" @click=${searchHandler}>Search</button>
        </div>

        <h2>Results:</h2>
        <div class="listings">

            ${cars.length > 0
                ? cars.map(c => carTemplate(c, isLogged))
                : html`<p class="no-cars"> No results.</p>`
            }
            
        </div>
    </section>
`;

export const searchView = (ctx) => {
    const searchHandler = (e) => {
        e.preventDefault();

        let serachElement = document.getElementById('search-input');

        carService.search(serachElement.value)
            .then(cars => {
                const isLogged = Boolean(ctx.user);
                ctx.render(searchTemplate(searchHandler, cars, isLogged));
            });
    };

    ctx.render(searchTemplate(searchHandler, []));
};
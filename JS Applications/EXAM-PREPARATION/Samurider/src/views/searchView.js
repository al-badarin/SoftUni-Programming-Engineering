import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as motorService from '../services/motorService.js';
import { motorTemplate } from '../templates/motorTemplate.js';

const searchTemplate = (searchHandler, motors) => html`
    <section id="search">

    <div class="form">
        <h4>Search</h4>
        <form class="search-form">
        <input type="text" name="search" id="search-input" />
        <button class="button-list" @click=${searchHandler}>Search</button>
        </form>
    </div>
    <h4 id="result-heading">Results:</h4>
    <div class="search-result">
        
        ${motors.length > 0
            ? motors.map(m => motorTemplate(m))
            : html`<h2 class="no-avaliable">No result.</h2>`
        }
        
    </div>
    </section>
`;

export const searchView = (ctx) => {
    const searchHandler = (e) => {
        e.preventDefault();

        let serachElement = document.getElementById('search-input');

        if(serachElement.value == ''){
            alert('Fill the search field!');
            return;
        }

        motorService.search(serachElement.value)
            .then(motors => {
                // const isLogged = Boolean(ctx.user);
                ctx.render(searchTemplate(searchHandler, motors));
            });
    };

    ctx.render(searchTemplate(searchHandler, []));
};
import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as petService from '../services/petService.js';

const detailsTemplate = (pet, isLogged, isOwner, user) => html`
    <section id="detailsPage">
        <div class="details">
            <div class="animalPic">
                <img src=${pet.image}>
            </div>
            <div>
                <div class="animalInfo">
                    <h1>Name: ${pet.name}</h1>
                    <h3>Breed: ${pet.breed}</h3>
                    <h4>Age: ${pet.age}</h4>
                    <h4>Weight: ${pet.weight}</h4>
                    <h4 class="donation">Donation: 0$</h4>
                </div>
                <!-- if there is no registered user, do not display div-->
                ${isLogged
        ? html`
                    <div class="actionBtn">
                    <!-- Only for registered user and creator of the pets-->
                    ${isOwner
                ? html`
                        <a href="/pets/${pet._id}/edit" class="edit">Edit</a>
                        <a href="/pets/${pet._id}/delete" class="remove">Delete</a> `
                : nothing
            }
                    <!--(Bonus Part) Only for no creator and user-->
                    ${!isOwner
                ? html`<a href="#" class="donate">Donate</a>`
                : nothing
            }
                    </div>`
        : nothing
    }
                
            </div>
        </div>
    </section>
`;

export const detailsView = (ctx) => {
    let isLogged = Boolean(ctx.user);

    petService.getOne(ctx.params.petId)
        .then(pet => {
            // VALIDATING IF THE USER IS LOGGED AND IS THE OWNER:
            // let showButtons = Boolean(ctx.user) && pet._ownerId == ctx.user._id;

            let isOwner = pet._ownerId == ctx.user?._id;

            ctx.render(detailsTemplate(pet, isLogged, isOwner, ctx.user));
        });
}
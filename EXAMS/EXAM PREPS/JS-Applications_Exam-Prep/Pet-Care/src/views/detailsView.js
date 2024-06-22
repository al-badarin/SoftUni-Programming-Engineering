import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as petService from '../services/petService.js';
import * as petDonationService from '../services/petDonationService.js';

const detailsTemplate = (pet, donations, isLogged, canDonate, isOwner, onDelete, onDonate) => html`
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
                    <h4 class="donation">Donation: ${donations}$</h4>
                </div>

                ${petControls(pet, isLogged, canDonate, isOwner, onDelete, onDonate)}

            </div>
        </div>
    </section>
`;

// export const detailsView = (ctx) => {
//     const petId = ctx.params.petId;

//     let isLogged = Boolean(ctx.user);

//     petService.getOne(petId)
//         .then(pet => {
//             // VALIDATING IF THE USER IS LOGGED AND IS THE OWNER:
//             // let showButtons = Boolean(ctx.user) && pet._ownerId == ctx.user._id;

//             let isOwner = pet._ownerId == ctx.user?._id;

//             ctx.render(detailsTemplate(pet, isLogged, isOwner, ctx.user, onDonate));
//         });

//     const onDonate = () => {
//         petDonationService.donate(petId)
//             .then(() => {
//                 ctx.page.redirect('/catalog' + petId);
//             })
//     }
// }

function petControls(pet, isLogged, canDonate, isOwner, onDelete, onDonate) {
    if (isLogged == false) {
        return nothing;
    }
    if (canDonate) {
        return html`
        <div class="actionBtn">
            <a @click=${onDonate} href="javascript:void(0)" class="donate">Donate</a>
        </div>`;
    }
    if(isOwner){
        return html`
        <div class="actionBtn">
            <a href="/pets/${pet._id}/edit" class="edit">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>
        </div>`;
    }
}

export async function detailsView(ctx) {
    const petId = ctx.params.petId;

    const requests = [
        petService.getOne(petId),
        petDonationService.getDonations(petId)
    ];

    const isLogged = Boolean(ctx.user);

    if (isLogged) {
        requests.push(petDonationService.getOwnDonations(petId, ctx.user._id));
    }

    const [pet, donations, hasDonation] = await Promise.all(requests);

    const isOwner = isLogged && ctx.user._id == pet._ownerId;
    const canDonate = !isOwner && hasDonation == 0;

    ctx.render(detailsTemplate(pet, donations * 100, isLogged, canDonate, isOwner, onDelete, onDonate));

    async function onDelete() {
        const choice = confirm('Are yoy sure you want to delete this pet?');

        if (choice) {
            await petService.remove(petId);
            ctx.page.redirect('/');
        }
    }

    async function onDonate() {
        await petDonationService.donate(petId);
        ctx.page.redirect(`/catalog/${petId}`);
    }
}

// ${isLogged 
//     ? html`
// <div class="actionBtn">
// <!-- Only for registered user and creator of the pets-->
// ${isOwner
//     ? html`
//     <a href="/pets/${pet._id}/edit" class="edit">Edit</a>
//     <a href="/pets/${pet._id}/delete" class="remove">Delete</a> `
//     : nothing
// }
// <!--(Bonus Part) Only for no creator and user-->
// ${!isOwner
//     ? html`<a @click=${onDonate} href="javascript:void(0)" class="donate">Donate</a>`
//     : nothing
// }
// </div>`
//     : nothing
// }
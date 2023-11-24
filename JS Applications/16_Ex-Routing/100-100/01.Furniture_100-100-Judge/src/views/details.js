import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteRecord, getById } from '../data/services.js';
import { getUserData } from '../util.js';

const detailsTemplate = (record, onDelete) => html`
       <div class="row space-top">
            <div class="col-md-12">
                <h1>Furniture Details</h1>
            </div>
        </div>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                       <img src=${record.img} />
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <p>Make: <span>${record.make}</span></p>
                <p>Model: <span>${record.model}</span></p>
                <p>Year: <span>${record.year}</span></p>
                <p>Description: <span>${record.description}</span></p>
                <p>Price: <span>${record.price}</span></p>
                <p>Material: <span>${record.material}</span></p>
                ${record.canEdit ? html`
                <div>
                    <a href="/edit/${record._id}" class="btn btn-info">Edit</a>
                    <a @click=${onDelete} href="javascript:void(0)" class="btn btn-red">Delete</a>
                </div>`: null}
            </div>
        </div>`

export async function detailsPage(ctx) {
    const id = ctx.params.id;

    const record = await getById(id);
    const userData = getUserData();

    if (userData) {
        record.canEdit = userData._id == record._ownerId;
    }

    record.img = record.img.replace(/([^\/]+\/)/, "../$1");
    update();
    function update() {
        ctx.render(detailsTemplate(record, onDelete));

    }

    async function onDelete() {
        const choice = confirm('Are you sure?');

        if (choice) {
            await deleteRecord(id);
            ctx.page.redirect('/details/' + id);
        }
    }
}

//  < !--Details page-- >
//     <section id="details">
//         <div id="details-wrapper">
//             <img id="details-img" src="${offer.imageUrl}" alt="example1" />
//             <p id="details-title">${offer.title}</p>
//             <p id="details-category">
//                 Category: <span id="categories">${offer.category}</span>
//             </p>
//             <p id="details-salary">
//                 Salary: <span id="salary-number">${offer.salary}</span>
//             </p>
//             <div id="info-wrapper">
//                 <div id="details-description">
//                     <h4>Description</h4>
//                     <span>${offer.description}</span>
//                 </div>
//                 <div id="details-requirements">
//                     <h4>Requirements</h4>
//                     <span>${offer.requirements}</span>
//                 </div>
//             </div>
//             <p>Applications: <strong id="applications">${offer.applications}</strong></p>

//             <!--Edit and Delete are only for creator-->
//             ${offer.canEdit || offer.canApply ? html`
//             <div id="action-buttons">
//               ${offer.canEdit ? html`
//                <a href="/catalog/${offer._id}/edit" id="edit-btn">Edit</a>
//               <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>` : null}
//               ${offer.canApply ? html`
//               <!--Bonus - Only for logged-in users ( not authors )-->
//               <a @click=${onApply} href="javascript:void(0)" id="apply-btn">Apply</a>` : null}
//             </div>`: null}
//         </div>
//     </section>
import { html } from '../../node_modules/lit-html/lit-html.js';
import { getById, updateRecord } from '../data/services.js';
import { createSubmitHandler } from '../util.js';

const editTemplate = (record, onEdit) => html`
             <div class="row space-top">
            <div class="col-md-12">
                <h1>Edit Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${onEdit}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control" id="new-make" type="text" name="make" .value=${record.make}>
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control is-valid" id="new-model" type="text" name="model" .value=${record.model}>
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control is-invalid" id="new-year" type="number" name="year" .value=${record.year}>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control" id="new-description" type="text" name="description" .value=${record.description}>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control" id="new-price" type="number" name="price" .value=${record.price}>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control" id="new-image" type="text" name="img" .value=${record.img}>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material" .value=${record.material}>
                    </div>
                    <input type="submit" class="btn btn-info" value="Edit" />
                </div>
            </div>
        </form>`;


export async function editPage(ctx) {
    const id = ctx.params.id;
    const record = await getById(id);
    ctx.render(editTemplate(record, createSubmitHandler(onEdit)));

    async function onEdit({
        make,
        model,
        year,
        description,
        price,
        img,
        material

    }) {
        if ([make,
            model,
            year,
            description,
            price,
            img,
            material
        ].some(f => f == '')) {
            return alert('All fields are required!');
        }

        await updateRecord(id, {
            make,
            model,
            year,
            description,
            price,
            img,
            material

        });

        ctx.page.redirect('/');
    }
}


// < !--Edit Page(Only for logged -in users) -->
//       <section id="edit">
//         <div class="form">
//           <h2>Edit Offer</h2>
//           <form class="edit-form" @submit=${onEdit}>
//             <input type="text" name="title" .value=${offer.title} id="job-title" placeholder="Title" />
//             <input type="text" name="imageUrl" id="job-logo" .value=${offer.imageUrl} placeholder="Company logo url" />
//             <input type="text" name="category" id="job-category" .value=${offer.category} placeholder="Category" />
//             <textarea id="job-description" name="description" .value=${offer.description} placeholder="Description" rows="4" cols="50"></textarea>
//             <textarea id="job-requirements" name="requirements" .value=${offer.requirements} placeholder="Requirements" rows="4"
//               cols="50"></textarea>
//             <input type="text" name="salary" id="job-salary" .value=${offer.salary} placeholder="Salary" />

//             <button type="submit">post</button>
//           </form >
//         </div >
//       </section >
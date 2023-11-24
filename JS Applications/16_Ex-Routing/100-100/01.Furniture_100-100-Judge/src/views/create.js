import { html } from '../../node_modules/lit-html/lit-html.js';
import { createRecords } from '../data/services.js';
import { createSubmitHandler } from '../util.js';


const createTemplate = (onCreate) => html`
                <div class="row space-top">
            <div class="col-md-12">
                <h1>Create New Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${onCreate}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control valid" id="new-make" type="text" name="make">
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control is-valid" id="new-model" type="text" name="model">
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control is-invalid" id="new-year" type="number" name="year">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control" id="new-description" type="text" name="description">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control" id="new-price" type="number" name="price">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control" id="new-image" type="text" name="img">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Create" />
                </div>
            </div>
        </form>`;


export function createPage(ctx) {
    ctx.render(createTemplate(createSubmitHandler(onCreate)));

    async function onCreate({
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

        await createRecords({
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


// < !--Create Page(Only for logged -in users) -->
//     <section id="create">
//         <div class="form">
//             <h2>Create Offer</h2>
//             <form class="create-form" @submit=${onCreate}>
//             <input type="text" name="title" id="job-title" placeholder="Title" />
//             <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" />
//             <input type="text" name="category" id="job-category" placeholder="Category" />
//             <textarea id="job-description" name="description" placeholder="Description" rows="4" cols="50"></textarea>
//             <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4"
//                 cols="50"></textarea>
//             <input type="text" name="salary" id="job-salary" placeholder="Salary" />

//             <button type="submit">post</button>
//         </form>
//     </div>
//       </section >
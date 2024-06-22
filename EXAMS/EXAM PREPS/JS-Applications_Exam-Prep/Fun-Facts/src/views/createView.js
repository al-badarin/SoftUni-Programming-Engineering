import { html, nothing, render } from '../../node_modules/lit-html/lit-html.js';
import * as funFactsService from '../services/funFactsService.js';
import { factDataIsInvalid } from '../utils/validator.js';

const createTemplate = (submitHandler) => html`
<section id="create">
  <div class="form">
    <h2>Add Fact</h2>
    <form class="create-form" @submit=${submitHandler} method="POST">
      <input type="text" name="category" id="category" placeholder="Category" />
      <input type="text" name="image-url" id="image-url" placeholder="Image URL" />
      <textarea id="description" name="description" placeholder="Description" rows="10" cols="50"></textarea>
      <textarea id="additional-info" name="additional-info" placeholder="Additional Info" rows="10"
        cols="50"></textarea>
      <button type="submit">Add Fact</button>
    </form>
  </div>
</section>`

export const createView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();

        //let formData = new FormData(e.currentTarget);
        // const { email, password, ['re-password']: repass } = Object.fromEntries(formData);
        // if(factData['additional-info'] == '' ||){...}

        let factData = Object.fromEntries(new FormData(e.currentTarget));

        if (factDataIsInvalid(factData)) {
            alert('All fields should be filled!');
            return;
        }

        funFactsService.create(factData)
            .then(() => {
              console.log(factData);
                ctx.page.redirect('/catalog');
            })
            .catch(err => {
                alert(err);
            });

    }
    ctx.render(createTemplate(submitHandler));
}
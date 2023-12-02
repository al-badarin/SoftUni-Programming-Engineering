import { html, nothing, render } from '../../node_modules/lit-html/lit-html.js';
import * as funFactsService from '../services/funFactsService.js';
import { factDataIsInvalid } from '../utils/validator.js';

const editTemplate = (fact, submitHandler) => html`
<section id="edit">
  <div class="form">
    <h2>Edit Fact</h2>
    <form class="edit-form" @submit=${submitHandler} method="POST">
      <input type="text" name="category" id="category" placeholder="Category" .value="${fact.category}"/>
      <input type="text" name="image-url" id="image-url" placeholder="Image URL" .value="${fact.imageUrl}"/>
      <textarea id="description" name="description" placeholder="Description" rows="10" cols="50" .value="${fact.description}"></textarea>
      <textarea id="additional-info" name="additional-info" placeholder="Additional Info" rows="10" cols="50" .value="${fact.additionalInfo}"></textarea>
      <button type="submit">Post</button>
    </form>
  </div>
</section>
`;

export const editView = (ctx) => {
  const factId = ctx.params.factId;

  const submitHandler = (e) => {
    e.preventDefault();

    // let factData = Object.fromEntries(new FormData(e.currentTarget));

    // if (factDataIsInvalid(factData)) {
    //     alert('All fields should be filled!');
    //     return;
    // }

    let formData = new FormData(e.currentTarget);
    const { category, ['image-url']: imageUrl, description, ['additional-info']: additionalInfo } = Object.fromEntries(formData);

    if(category == '' || imageUrl == '' || description == '' || additionalInfo == ''){
      alert('All fields are required!');
      return;
    }

    funFactsService.edit(factId, category, imageUrl, description, additionalInfo)
      .then(() => {
        ctx.page.redirect(`/facts/${factId}`)
      })
  }
  funFactsService.getOne(factId)
    .then(fact => {
      ctx.render(editTemplate(fact, submitHandler));
    });
};
import { html, nothing, render } from '../../node_modules/lit-html/lit-html.js';
import * as funFactsService from '../services/funFactsService.js';

const detailsTemplate = (fact, isLogged, user) => html`
<section id="details">
  <div id="details-wrapper">
    <img id="details-img" src=${fact.imageUrl} alt="example1" />
    <p id="details-category">History</p>
    <div id="info-wrapper">
      <div id="details-description">
        <p id="description">
        ${fact.description}
        </p>
        <p id="more-info">
        ${fact.moreInfo}
        </p>
      </div>

      <h3>Likes:<span id="likes">0</span></h3>

      <!--Edit and Delete are only for creator-->
      ${(isLogged && fact._ownerId == user._id)
            ? html`<div id="action-buttons">
                <a href="/facts/${fact._id}/edit" id="edit-btn">Edit</a>
                <a href="/facts/${fact._id}/delete" id="delete-btn">Delete</a></div>`
            : nothing
        }

        <!--Bonus - Only for logged-in users ( not authors )-->
        ${isLogged
            ? html`<div id="action-buttons">
                <a href="/like" id="like-btn">Like</a></div>`
            : nothing
        }
        
    </div>
  </div>
</section>
`;

export const detailsView = (ctx) => {
    let isLogged = Boolean(ctx.user);

    funFactsService.getOne(ctx.params.factId)
        .then(fact => {
            // let isOwner = fact._ownerId == ctx.user._id;

            ctx.render(detailsTemplate(fact, isLogged, ctx.user));
        });
};
import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as albumService from '../services/albumService.js';

const detailsTemplate = (album, isOwner, isLogged) => html`
    <!-- Details page -->
<section id="details">
  <div id="details-wrapper">
    <p id="details-title">Album Details</p>
    <div id="img-wrapper">
      <img src=${album.imageUrl} alt="example1" />
    </div>
    <div id="info-wrapper">
      <p><strong>Band:</strong><span id="details-singer">${album.singer}</span></p>
      <p>
        <strong>Album name:</strong><span id="details-album">${album.album}</span>
      </p>
      <p><strong>Release date:</strong><span id="details-release">${album.release}</span></p>
      <p><strong>Label:</strong><span id="details-label">${album.label}</span></p>
      <p><strong>Sales:</strong><span id="details-sales">${album.sales}</span></p>
    </div>
    <div id="likes">Likes: <span id="likes-count">0</span></div>

    <!--Edit and Delete are only for creator-->
    <div id="action-buttons">
      <a href="" id="like-btn">Like</a>
      ${isOwner
        ? html`<a href="/albums/${album._id}/edit" id="edit-btn">Edit</a>
        <a href="/albums/${album._id}/delete" id="delete-btn">Delete</a>`
        : nothing
      }
    </div>
  </div>
</section>
`;

export const detailsView = (ctx) => {
    let isLogged = Boolean(ctx.user);

    albumService.getOne(ctx.params.albumId)
        .then(album => {
            let isOwner = album._ownerId == ctx.user?._id;

            ctx.render(detailsTemplate(album, isOwner, isLogged));
        });
};
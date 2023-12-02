import { html, nothing } from '../../node_modules/lit-html/lit-html.js';

const albumDetails = (albumId) => html`
      <a class="details-btn" href="/albums/${albumId}">Details</a>
`;

export const albumTemplate = (album, withDetails = true) => html`
    <li class="card">
      <img src=${album.imageUrl} alt="travis" />
      <p>
        <strong>Singer/Band: </strong><span class="singer">${album.singer}</span>
      </p>
      <p>
        <strong>Album name: </strong><span class="album">${album.album}</span>
      </p>
      <p><strong>Sales:</strong><span class="sales">${album.sales}</span></p>
    ${withDetails
        ? albumDetails(album._id)
        : nothing
    }
    </li>
`;
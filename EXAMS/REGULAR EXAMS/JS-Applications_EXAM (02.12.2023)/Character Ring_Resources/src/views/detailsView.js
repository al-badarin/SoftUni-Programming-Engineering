import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as characterService from '../services/characterService.js';
import * as likeService from '../services/likeService.js';

// const detailsTemplate = (character, isOwner, isLogged) => html`
// <section id="details">
//   <div id="details-wrapper">
//     <img id="details-img" src=${character.imageUrl} alt="example1" />
//     <div>
//       <p id="details-category">${character.category}</p>
//       <div id="info-wrapper">
//         <div id="details-description">
//           <p id="description">${character.description}</p>
//           <p id="more-info">${character.moreInfo}</p>
//         </div>
//       </div>
//       <h3>Is This Useful:<span id="likes">0</span></h3>

//       <div id="action-buttons">
//         ${isOwner
//             ? html`<a href="/characters/${character._id}/edit" id="edit-btn">Edit</a>
//             <a href="/characters/${character._id}/delete" id="delete-btn">Delete</a>`
//             : nothing
//         }

//         ${isLogged && !isOwner
//             ? html`<a href="#" id="like-btn">Like</a>`
//             : nothing
//         }
//       </div>
//     </div>
//   </div>
// </section>
// `;

// export const detailsView = (ctx) => {
//     let isLogged = Boolean(ctx.user);

//     characterService.getOne(ctx.params.characterId)
//         .then(character => {
//             console.log(character._id);
//             let isOwner = character._ownerId == ctx.user?._id;

//             ctx.render(detailsTemplate(character, isOwner, isLogged));
//         });
// };

const detailsTemplate = (character, onLike) => html`
<section id="details">
  <div id="details-wrapper">
    <img id="details-img" src=${character.imageUrl} alt="example1" />
    <div>
      <p id="details-category">${character.category}</p>
      <div id="info-wrapper">
        <div id="details-description">
          <p id="description">${character.description}</p>
          <p id="more-info">${character.moreInfo}</p>
        </div>
      </div>
      <h3>Is This Useful:<span id="likes">${character.likes}</span></h3>

      <div id="action-buttons">
        ${character.isOwner
            ? html`<a href="/characters/${character._id}/edit" id="edit-btn">Edit</a>
            <a href="/characters/${character._id}/delete" id="delete-btn">Delete</a>`
            : nothing
        }

        ${character.hasUser && !character.isOwner
            ? html`<a href="#" id="like-btn" @click=${onLike}>Like</a>`
            : nothing
        }
      </div>
    </div>
  </div>
</section>
`;

export async function detailsView(ctx){
    const characterId = ctx.params.characterId;

    const character = await likeService.getOneCharacter(characterId);

    const [likes, hasLiked] = await Promise.all([
        likeService.getLikes(characterId),
        likeService.hasLiked(characterId, ctx.user)
    ]);

    character.likes = likes;
    console.log('likes, hasLiked:', likes, hasLiked);

    if(ctx.user){
        character.hasUser = true;
        character.isOwner = ctx.user._id == character._ownerId;
        character.canLike = !character.isOwner && !hasLiked;
    }

    ctx.render(detailsTemplate(character, onLike));

    async function onLike(){
        await likeService.likecharacter(characterId);
        ctx.page.redirect(`/characters/${characterId}`);
    }
}






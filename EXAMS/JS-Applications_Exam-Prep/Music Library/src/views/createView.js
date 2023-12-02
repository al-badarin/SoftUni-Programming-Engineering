import { html } from '../../node_modules/lit-html/lit-html.js';
import * as albumService from '../services/albumService.js';

const createTemplate = (submitHandler) => html`
    <section id="create">
    <div class="form">
        <h2>Add Album</h2>
        <form class="create-form" @submit=${submitHandler}>
        <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
        <input type="text" name="album" id="album-album" placeholder="Album" />
        <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
        <input type="text" name="release" id="album-release" placeholder="Release date" />
        <input type="text" name="label" id="album-label" placeholder="Label" />
        <input type="text" name="sales" id="album-sales" placeholder="Sales" />

        <button type="submit">post</button>
        </form>
    </div>
    </section>
`;

export const createView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();

        let albumData = Object.fromEntries(new FormData(e.currentTarget));

        if (albumData.singer == '' ||
            albumData.album == '' ||
            albumData.imageUrl == '' ||
            albumData.release == '' ||
            albumData.label == '' ||
            albumData.sales == '') {
            alert('All fields must be filled!');
            return;
        }

        // if (albumIsInvalid(albumData)) {
        //     alert('All fields should be filled!');
        //     return;
        // }

        albumService.create(albumData)
            .then(() => {
                ctx.page.redirect('/catalog');
            })
            .catch(err => {
                alert(err);
            });
    }
    ctx.render(createTemplate(submitHandler));
};
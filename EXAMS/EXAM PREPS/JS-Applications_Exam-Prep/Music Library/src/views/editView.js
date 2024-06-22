import { html } from '../../node_modules/lit-html/lit-html.js';
import * as albumService from '../services/albumService.js';

const editTemplate = (album, submitHandler) => html`
    <section id="edit">
    <div class="form">
        <h2>Edit Album</h2>
        <form class="edit-form" @submit=${submitHandler}>
        <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" value="${album.singer}"/>
        <input type="text" name="album" id="album-album" placeholder="Album" value="${album.album}"/>
        <input type="text" name="imageUrl" id="album-img" placeholder="Image url" value="${album.imageUrl}"/>
        <input type="text" name="release" id="album-release" placeholder="Release date" value="${album.release}"/>
        <input type="text" name="label" id="album-label" placeholder="Label" value="${album.label}"/>
        <input type="text" name="sales" id="album-sales" placeholder="Sales" value="${album.sales}"/>

        <button type="submit">post</button>
        </form>
    </div>
    </section>
`;

export const editView = (ctx) => {
    const albumId = ctx.params.albumId;

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

        albumService.edit(albumId, albumData)
            .then(() => {
                ctx.page.redirect(`/albums/${albumId}`);
            });
    }
    albumService.getOne(albumId)
        .then(album => {
            ctx.render(editTemplate(album, submitHandler));
        });
};
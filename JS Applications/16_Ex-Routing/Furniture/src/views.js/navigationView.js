import { html, render, nothing } from '../../node_modules/lit-html/lit-html.js';

const userLinks = html`
    <div id="user"><!-- style="display: none;" -->
        <a id="createLink" href="/create">Create Furniture</a>
        <a id="profileLink" href="/my-catalog">My Publications</a>
        <a id="logoutBtn" href="/logout">Logout</a>
    </div>
`;

const guestLinks = html`
    <div id="guest"> <!--style="display: none;"-->
        <a id="loginLink" href="/login" class="active">Login</a>
        <a id="registerLink" href="/register">Register</a>
    </div>
`;

const navigationTemplate = (user) => html`
    <h1><a href="/">Furniture Store</a></h1>
    <nav>
    <a id="catalogLink" href="/">Dashboard</a>

    ${user
        ? userLinks
        : guestLinks
    }
    </nav>
`;

export const navigationView = (ctx) => {
    return navigationTemplate(ctx.user);
}
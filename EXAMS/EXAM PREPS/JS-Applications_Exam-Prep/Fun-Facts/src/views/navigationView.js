import { html, nothing, render } from '../../node_modules/lit-html/lit-html.js';

const guestLinks = html`
<!-- Logged-in users -->
    <div class="user">
        <a href="/create">Add Fact</a>
        <a href="/logout">Logout</a>
    </div>
`;

const userLinks = html`
<!-- Guest users -->
    <div class="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>
`;

const navigationTemplate = (user) => html`
    <!-- Navigation -->
    <a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="" /></a>

    <nav>
    <div>
        <a href="/catalog">Fun Facts</a>
    </div>

    ${user
        ? guestLinks
        : userLinks
    }
    
    </nav>
`;

export const navigationView = (ctx) => {
    return navigationTemplate(ctx.user);
}
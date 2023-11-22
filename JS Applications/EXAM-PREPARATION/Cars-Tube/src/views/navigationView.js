import { html, render } from '../../node_modules/lit-html/lit-html.js';

const guestLinks = html`
<!-- Guest users -->
    <div id="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>
`;

const userLinks = html`
 <!-- Logged users -->
    <div id="profile">
        <a>Welcome username</a>
        <a href="/myListings">My Listings</a>
        <a href="/create">Create Listing</a>
        <a href="/logout">Logout</a>
    </div>
`;

const navigationTemplate = (user) => html`
    <header class="header-navigation">
        <!--All user-->
        <nav>
            <a class="active" href="/">Home</a>
            <a href="/allListings">All Listings</a>
            <a href="/search">By Year</a>

            ${user
                ? userLinks
                : guestLinks
            }

        </nav>
    </header>
`;


export const navigationView = (ctx) => {
    ctx.render(navigationTemplate(ctx.user));
}
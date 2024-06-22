import { html, render } from '../../node_modules/lit-html/lit-html.js';

const guestLinks = () => html`
<!-- Guest users -->
    <div id="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>
`;

const userLinks = (username) => html`
 <!-- Logged users -->
    <div id="profile">
        <a>Welcome ${username}</a>
        <a href="/profile">My Listings</a>
        <a href="/create">Create Listing</a>
        <a href="/logout">Logout</a>
    </div>
`;

const navigationTemplate = (user) => html`
        <!--All user-->
        <nav>
            <a class="active" href="/">Home</a>
            <a href="/catalog">All Listings</a>
            <a href="/search">By Year</a>

            ${user
                ? userLinks(user.username)
                : guestLinks()
            }
        </nav>
`;


export const navigationView = (ctx) => {
    return navigationTemplate(ctx.user);
}
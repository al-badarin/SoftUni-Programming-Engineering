import { html, render } from '../../node_modules/lit-html/lit-html.js';


const navigationTemplate = () => html`
<!-- Navigation -->
    <header class="header-navigation">
        <nav>

            <a class="active" href="/">Home</a>
            <a href="/catalog">All Listings</a>
            <a href="/search">By Year</a>

            <!-- Guest users -->
            <div id="guest">
                <a href="/login">Login</a>
                <a href="/register">Register</a>
            </div>

            <!-- Logged users -->
            <div id="profile">
                <a>Welcome username</a>
                <a href="/myListings">My Listings</a>
                <a href="/create">Create Listing</a>
                <a href="/logout">Logout</a>
            </div>

        </nav>
    </header>
`;


export const navigationView = (ctx) => {
    ctx.render(navigationTemplate());
}
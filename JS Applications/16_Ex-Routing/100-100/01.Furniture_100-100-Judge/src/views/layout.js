import { html } from '../../node_modules/lit-html/lit-html.js';

// TODO replace with actual layout
export const layoutTemplate = (userData, content) => html`
        <header>
        <h1><a href="/">Furniture Store</a></h1>
                <nav>
                <a id="catalogLink" href="/" class="active">Dashboard</a>

                ${userData ? html`
                <div id="user">
                        <a id="createLink" href="/create">Create Furniture</a>
                        <a id="profileLink" href="/myFurniture">My Publications</a>
                        <a id="logoutBtn" href="logout">Logout</a>
                </div>` : html`
                <div id="guest">
                        <a id="loginLink" href="/login">Login</a>
                        <a id="registerLink" href="/register">Register</a>
                </div>`}
                </nav>
        </header>

<div class="container">
      ${content}
</div>`
      






//         < header >
// < !--Navigation -->
// <a id="logo" href="/"
//         ><img id="logo-img" src="./images/logo.jpg" alt=""
// /></a>

// <nav>
//         <div>
//         <a href="/dashboard">Dashboard</a>
//         </div>

//         ${userData ? html`
//                 <!-- Logged-in users -->
//                 <div class="user">
//                 <a href="/create">Create Offer</a>
//                 <a href="logout">Logout</a>
//                 </div>` :
//                 html`
//                 <!-- Guest users -->
//                 <div class="guest">
//                 <a href="/login">Login</a>
//                 <a href="/register">Register</a>
//                 </div>`}
// </nav>
// </header >
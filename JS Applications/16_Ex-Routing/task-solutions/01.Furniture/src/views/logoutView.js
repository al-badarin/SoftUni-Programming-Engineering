import { render, html } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { logout } from "../api/users.js";
import { updateNav } from "../utils.js";

export async function logoutView(context) {
    logout();

    updateNav();

    page.redirect('/');
}


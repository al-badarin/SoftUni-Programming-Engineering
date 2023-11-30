import { html } from '../../node_modules/lit-html/lit-html.js';
import * as userService from '../services/userService.js';

//@submit=${submitHandler}
//TODO: ADD THE TEMPLATE
const loginTemplate = (submitHandler) => html`

`;

export const loginView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();

        const { email, password } = Object.fromEntries(new FormData(e.currentTarget));

        userService.login(email, password)
            .then(() => {
                ctx.page.redirect('/');
            })
            .catch(err => {
                alert(err);
            });
    }

    ctx.render(loginTemplate(submitHandler));
};
import { html } from '../../node_modules/lit-html/lit-html.js';
import * as userService from '../services/userService.js';

const loginTemplate = (submitHandler) => html`
    <section id="login">
    <div class="form">
        <h2>Login</h2>
        <form class="login-form" @submit=${submitHandler}>
        <input type="text" name="email" id="email" placeholder="email" />
        <input type="password" name="password" id="password" placeholder="password" />
        <button type="submit">login</button>
        <p class="message">
            Not registered? <a href="#">Create an account</a>
        </p>
        </form>
    </div>
    </section>
`;

export const loginView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();

        const { email, password } = Object.fromEntries(new FormData(e.currentTarget));

        if (email == '' || password == '') {
            alert('All fields are required!');
            return;
        }

        userService.login(email, password)
            .then(res => {
                if(res == '200'){
                    ctx.page.redirect('/');
                } else {
                    alert('Failed login!');
                    return
                }
            })
            .catch(err => {
                alert(err);
            });
    }

    ctx.render(loginTemplate(submitHandler));
}
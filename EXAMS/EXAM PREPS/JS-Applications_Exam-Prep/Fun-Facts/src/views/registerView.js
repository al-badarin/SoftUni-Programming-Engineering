import { html, render } from '../../node_modules/lit-html/lit-html.js';
import * as userService from '../services/userService.js';

const registerTemplate = (submitHandler) => html`
<section id="register">
  <div class="form">
    <h2>Register</h2>
    <form class="register-form" @submit=${submitHandler}>
      <input type="text" name="email" id="register-email" placeholder="email" />
      <input type="password" name="password" id="register-password" placeholder="password" />
      <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
      <button type="submit">register</button>
      <p class="message">Already registered? <a href="/login">Login</a></p>
    </form>
  </div>
</section>
`;

export const registerView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        const { email, password, ['re-password']: repass } = Object.fromEntries(formData);

        if (email == '' ||
            password == '' ||
            repass == '') {
            alert('All fields are required!')
            return;
        }

        if (repass != password) {
            alert('Password does not match!')
            return;
        }

        userService.register(email, password)
            .then(() => {
                ctx.page.redirect('/');
            })
            .catch(err => {
                alert(err.message);
                // window.alert(err);
            });
    }

    ctx.render(registerTemplate(submitHandler));
}
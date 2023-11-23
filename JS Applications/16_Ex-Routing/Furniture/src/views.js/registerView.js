import {html, render, nothing} from '../../node_modules/lit-html/lit-html.js';
import * as userService from '../services/userService.js';

const registerTemplate = (submitHandler) => html`
    <div class="row space-top">
    <div class="col-md-12">
        <h1>Register New User</h1>
        <p>Please fill all fields.</p>
    </div>
    </div>
    <form @submit=${submitHandler}>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="email">Email</label>
                <input class="form-control" id="email" type="text" name="email">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="password">Password</label>
                <input class="form-control" id="password" type="password" name="password">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="rePass">Repeat</label>
                <input class="form-control" id="rePass" type="password" name="rePass">
            </div>
            <input type="submit" class="btn btn-primary" value="Register" />
        </div>
    </div>
    </form>
`;

export const registerView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        const { email, password, rePass } = Object.fromEntries(formData);

        if (email == '' ||
            password == '' ||
            rePass == '') {
            alert('All fields are required!')
            return;
        }

        if (rePass != password) {
            alert('Password does not match!')
            return;
        }

        userService.register(email, password)
            .then(() => {
                ctx.page.redirect('/');
            })
            .catch(err => {
                alert(err);
            });
    }

    ctx.render(registerTemplate(submitHandler));
}
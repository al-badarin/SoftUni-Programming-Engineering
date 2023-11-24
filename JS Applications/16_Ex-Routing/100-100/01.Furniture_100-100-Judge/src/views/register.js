import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../data/auth.js';
import { createSubmitHandler } from '../util.js';

const registerTemplate = (onRegister) => html`
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Register New User</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${onRegister}>
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
        </form>`


export function registerPage(ctx) {

    ctx.render(registerTemplate(createSubmitHandler(onRegister)));

    // TODO change user object based on requirements
    async function onRegister({ email, password, 'rePass' : repass }, form) {
        if(email.trim() == '' || password.trim() == ''){
            return alert('All fields are required!');
        }

        if(password !== repass){
            return alert('Password don\'t much');
        }

        await register(email, password);

        form.reset();
        // TODO change redirect upon the task requirements
        ctx.page.redirect('/');
    }
}




// < !--Register Page(Only for Guest users) -->
//   <section id="register">
//     <div class="form">
//       <h2>Register</h2>
//       <form class="login-form" @submit=${onRegister}>
//       <input
//         type="text"
//         name="email"
//         id="register-email"
//         placeholder="email"
//       />
//       <input
//         type="password"
//         name="password"
//         id="register-password"
//         placeholder="password"
//       />
//       <input
//         type="password"
//         name="re-password"
//         id="repeat-password"
//         placeholder="repeat password"
//       />
//       <button type="submit">register</button>
//       <p class="message">Already registered? <a href="/login">Login</a></p>
//     </form>
//   </div>
//         </section >
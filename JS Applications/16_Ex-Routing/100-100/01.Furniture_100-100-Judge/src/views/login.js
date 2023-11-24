import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../data/auth.js';
import { createSubmitHandler } from '../util.js';

const loginTemplate = (onLogin) => html`
         <div class="row space-top">
            <div class="col-md-12">
                <h1>Login User</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${onLogin}>
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
                    <input type="submit" class="btn btn-primary" value="Login" />
                </div>
            </div>
        </form>`


export function loginPage(ctx){
    
    ctx.render(loginTemplate(createSubmitHandler(onLogin)));
    
    // TODO change user object based on requirements
    async function onLogin({email, password}, form){
        await login(email, password);   
        form.reset();
        // TODO change redirect upon the task requirements
        ctx.page.redirect('/');
    }
}






// < !--Login Page(Only for Guest users) -->
//   <section id="login">
//     <div class="form">
//       <h2>Login</h2>
//       <form class="login-form" @submit=${onLogin}>
//       <input type="text" name="email" id="email" placeholder="email" />
//       <input
//         type="password"
//         name="password"
//         id="password"
//         placeholder="password"
//       />
//       <button type="submit">login</button>
//       <p class="message">
//         Not registered? <a href="/register">Create an account</a>
//       </p>
//     </form>
//   </div>
//         </section >
import { html } from '../../node_modules/lit-html/lit-html.js';
import * as userService from '../services/userService.js';

// @submit=${submitHandler}
//TODO: ADD THE TEMPLATE
const registerTemplate = (submitHandler) => html`
        
`;


export const registerView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        const { email, password, ['conf-pass']: repass } = Object.fromEntries(formData);

        if (email == '' ||
            password == '' ||
            repass == '') {
            alert('All fields required!')
            return;
        }

        if (repass != password) {
            alert('Password does not match!')
            return;
        }

        userService.register(email, password)
            // .then(res => {
            //     if (res.status == '200') {
            //         ctx.page.redirect('/');
            //     } else {
            //         alert('Failed register!');
            //         return;
            //     }
            // })
            .then(() => {
                ctx.page.redirect('/');
            })
            .catch(err => {
                alert(err);
            });
    }

    ctx.render(registerTemplate(submitHandler));
};
import * as authService from '../services/authServices.js';

export const logoutView = (ctx) => {
    authService.logout()
        .then(() => {
            ctx.page.redirect('/');
        });
}
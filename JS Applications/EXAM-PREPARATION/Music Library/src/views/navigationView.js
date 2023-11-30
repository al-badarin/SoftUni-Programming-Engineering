import { html } from '../../node_modules/lit-html/lit-html.js';

//TODO: ADD THE TEMPLATE
const guestLinks = html`
    
`;

//TODO: ADD THE TEMPLATE
const userLinks = html`
    
`;

//TODO: ADD THE TEMPLATE WITH:
    // ${user
    //     ? userLinks
    //     : guestLinks
    // }  
const navigationTemplate = (user) => html`
    
`;

export const navigationView = (ctx) => {
    return navigationTemplate(ctx.user);
};
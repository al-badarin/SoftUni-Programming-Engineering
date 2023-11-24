import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { navigationView } from '../views.js/navigationView.js';

const contentElement = document.querySelector('.container');
const headerElement = document.querySelector('#navigation');

const renderContent = (templateResult) => {
    render(templateResult, contentElement);
}

export const renderContentMiddleware = (ctx, next) => {
    ctx.render = renderContent;

    next();
}

export const renderNavigationMiddleware = (ctx, next) => {
    render(navigationView(ctx), headerElement);

    next();
}
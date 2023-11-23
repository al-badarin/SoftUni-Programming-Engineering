import { html, render } from '../../node_modules/lit-html/lit-html.js';

const contentElement = document.querySelector('.container');

const renderContent = (templateResult) => {
    render(templateResult, contentElement);
}

export const renderContentMiddleware = (ctx, next) => {
    ctx.render = renderContent;

    next();
}
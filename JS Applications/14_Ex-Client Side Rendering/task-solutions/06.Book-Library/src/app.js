import { mainTemplate } from './templates/mainTemplate.js';
import { html, render } from '/node_modules/lit-html/lit-html.js';
import { getAllBooks, deleteBook } from './api.js';
import { tableRowsTemplate } from './templates/tableRowsTemplate.js';

const documentBody = document.querySelector('body');
render(mainTemplate(), documentBody);


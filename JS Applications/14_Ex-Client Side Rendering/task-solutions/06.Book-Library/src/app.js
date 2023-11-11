import { mainTemplate } from './templates/mainTemplate.js';
import { html, render } from '/node_modules/lit-html/lit-html.js';
import { getAllBooks, deleteBook } from './api.js';
import { tableRowsTemplate } from './templates/tableRowsTemplate.js';

const documentBody = document.querySelector('body');
render(mainTemplate(), documentBody);

document.getElementById('loadBooks').addEventListener('click', async ()=>{
    const booksData = await getAllBooks();

    const tableBody = documentBody.querySelector('table tbody');

    const books = [];

    for (const id in booksData){
        books.push({
            author: booksData[id].author,
            title: booksData[id].title,
            _id: id
        });
    }

    render(tableRowsTemplate(books), tableBody);
})
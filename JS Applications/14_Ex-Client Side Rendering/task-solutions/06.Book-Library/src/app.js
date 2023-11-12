import { mainTemplate } from './templates/mainTemplate.js';
import { html, render } from '/node_modules/lit-html/lit-html.js';
import { getAllBooks, deleteBook, getBookById, updateBook } from './api.js';
import { tableRowsTemplate } from './templates/tableRowsTemplate.js';
import { editFormTemplate } from './templates/formTemplates.js';

const documentBody = document.querySelector("body");
render(mainTemplate(), documentBody);

document.getElementById("loadBooks").addEventListener("click", async () => {
    const booksData = await getAllBooks();

    const tableBody = documentBody.querySelector("table tbody");

    const books = [];

    for (const id in booksData) {
        books.push({
            author: booksData[id].author,
            title: booksData[id].title,
            _id: id,
        });
    }

    const context = {
        books,
        deleteHandler,
        updateHandler,
    };

    render(tableRowsTemplate(context), tableBody);
});

function deleteHandler(id) {
    deleteBook(id);

    document.getElementById("loadBooks").click();
}


// ADDED FUNCTIONALITY FOR CREATING A NEW BOOK
let addBookForm = document.getElementById('add-form');
addBookForm.addEventListener('submit', handleFormSubmit);

let inputTitleEl = document.querySelector('input[name="title"]');
let inputAuthorEl = document.querySelector('input[name="author"]');

async function handleFormSubmit(e) {
    e.preventDefault();
    let form = e.currentTarget;
    let formData = new FormData(form);

    if (form.dataset.isEdit !== undefined) {
        let id = form.dataset.entryId;
        updateBook(formData, id);
    } else {
        createBook(formData);
    }
}

async function createBook(formData) {
    if (inputAuthorEl.value !== '' && inputAuthorEl.value !== '') {
        let newBook = {
            title: formData.get('title'),
            author: formData.get('author')
        };

        let url = 'http://localhost:3030/jsonstore/collections/books';
        let createResponse = await fetch(url, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(newBook)
        });

        inputTitleEl.value = '';
        inputAuthorEl.value = '';

        document.getElementById("loadBooks").click();
    }
}


// ADDED FUNCTIONALITY FOR EDITING BOOK
let editForm = document.getElementById('edit-form');

let editTitleEl = document.querySelector('input[name="edit-title"]');
let editAuthorEl = document.querySelector('input[name="edit-author"]');
let addForm = document.getElementById('add-form');

async function updateHandler(id) {

    let book = await getBookById(id);
    console.log(book);

    addForm.replaceChildren(editForm);
    render(editFormTemplate(id, book), addForm);

    let saveBtn = document.querySelector('input[type="submit"]');

    saveBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('clicked');

        let formData = new FormData(editForm);
        let book = {
            title: formData.get('edit-title'),
            author: formData.get('edit-author')
        };

        //TODO EDIT FUNC
        // render(editFormTemplate(id, book), addForm);

        // editAuthorEl.value = '';
        // editTitleEl.value = '';
    })
}



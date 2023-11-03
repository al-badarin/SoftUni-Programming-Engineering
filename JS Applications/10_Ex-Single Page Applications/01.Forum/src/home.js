import { showDetails } from "./details.js";


const section = document.getElementById('homeView');
section.querySelector('div.topic-title').addEventListener('click', showDetails);

const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);

section.remove();


export function showHome(ev){
    ev?.preventDefault();

    document.getElementById('main').replaceChildren(section);

}

async function onSubmit(ev){
    ev.preventDefault();

    const formData = new FormData(form);

}
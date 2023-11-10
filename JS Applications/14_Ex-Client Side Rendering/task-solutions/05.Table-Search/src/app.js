import { render } from '/node_modules/lit-html/lit-html.js';
import { getAllStudents } from "./api.js";
import { studentsTemplate } from "./studentsTemplate.js";


const tableBody = document.querySelector(".container tbody");

const studentsData = await getAllStudents();

render(studentsTemplate(Object.values(studentsData)), tableBody);


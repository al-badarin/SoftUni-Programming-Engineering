import { getById } from "../api/data.js";

const section = document.getElementById('detailsPage');


export async function showDetails(context, id){
    const idea = await getById(id);
    console.log(idea);
    context.showSection(section);
}
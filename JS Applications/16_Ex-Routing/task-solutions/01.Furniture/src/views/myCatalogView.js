import { render, html } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { getFurnitureById } from "../api/data.js";
import { detailsView } from "./detailsView.js";

//TODO:
// const isFurnitureOwner =
//     furniture._ownerId === JSON.parse(sessionStorage.getItem("user"))?._id;

const myCatalogTemplate = () => html`
 <div class="row space-top">
            <div class="col-md-12">
                <h1>My Furniture</h1>
                <p>This is a list of your publications.</p>
            </div>
        </div>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                            <img src="./images/table.png" />
                            <p>Description here</p>
                            <footer>
                                <p>Price: <span>235 $</span></p>
                            </footer>
                            <div>
                                <a href="#" class="btn btn-info">Details</a>
                            </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                            <img src="./images/sofa.jpg" />
                            <p>Description here</p>
                            <footer>
                                <p>Price: <span>1200 $</span></p>
                            </footer>
                            <div>
                                <a href="#" class="btn btn-info">Details</a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
 `;

export async function myCatalogView(context) {
    console.log('...myCatalog...');

    //TODO:

    // const id = context.params.id;

    // const data = await getFurnitureById(id);

    // detailsView(data);

    render(myCatalogTemplate(), document.querySelector("body div.container"));

}


import { html } from '../../node_modules/lit-html/lit-html.js';
import { myRecord } from '../data/services.js';
import { getUserData } from '../util.js';


const myFurnitureTemplate = (records) => html`
        <div class="row space-top">
            <div class="col-md-12">
                <h1>My Furniture</h1>
                <p>This is a list of your publications.</p>
            </div>
        </div>
        <div class="row space-top">
                   ${records.length > 0 ? records.map(recordCard) : null}
        </div>`


const recordCard = (records) => html`
                    <div class="card-body">
                      <div class="col-md-4">
                        <div class="card text-white bg-primary">
                            <img src="${records.img}" />
                            <p>${records.description}</p>
                            <footer>
                                <p>Price: <span>${records.price} $</span></p>
                            </footer>
                            <div>
                                <a href="/details/${records._id}" class="btn btn-info">Details</a>
                            </div>
                          </div>
                       </div>
                    </div>`


export async function myFurniture(ctx) {
    const id = getUserData()?._id;
    const records = await myRecord(id);
    ctx.render(myFurnitureTemplate(records));
}
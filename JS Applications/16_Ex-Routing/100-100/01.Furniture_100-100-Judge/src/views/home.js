import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllRecords } from '../data/services.js';


const homeTemplate = (records) => html`
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Welcome to Furniture System</h1>
                <p>Select furniture from the catalog to view details.</p>
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


export async function homePage(ctx) {
  const records = await getAllRecords();
  ctx.render(homeTemplate(records));
}

// import { html } from '../../node_modules/lit-html/lit-html.js';

// // TODO replace with actual view
// const homeTemplate = () => html`
//         <!-- Home page -->
//         <section id="home">
//           <img
//             src="./images/pngkey.com-hunting-png-6697165-removebg-preview.png"
//             alt="home"
//           />
//           <h2>Searching for a job?</h2>
//           <h3>The right place for a new career start!</h3>
//         </section>`

// export function homePage(ctx){
//     ctx.render(homeTemplate());
// }
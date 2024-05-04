const http = require("http");
const { parse } = require("querystring");

const homeTemplate = require("./views/home.html");
const addCatTemplate = require("./views/addCat.html");
const addBreedTemplate = require("./views/addBreed.html");
const siteCss = require("./views/site.css");

const cats = [
  {
    id: 1,
    name: "Sisi",
    imageUrl:
      "https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg",
    breed: "Bombay Cat",
    description:
      "Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho.",
  },
  {
    id: 2,
    name: "Navcho",
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg",
    breed: "Persian Cat",
    description: "Nebuchadnezzar II",
  },
  {
    id: 3,
    name: "Juji",
    imageUrl:
      "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg",
    breed: "Bombay Cat",
    description:
      "Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho.",
  },
];

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.write(homeTemplate(cats));
    res.end();
  } else if (req.url === "/styles/site.css") {
    res.writeHead(200, {
      "content-type": "text/css",
    });
    res.write(siteCss);
    res.end();
  } else if (req.url === "/cats/add-cat" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString(); // Convert Buffer to string
    });
    req.on("end", () => {
      const formData = parse(body);
      console.log("Form Data:", formData); // Check form data
      const newCat = {
        id: cats.length + 1,
        name: formData.name,
        imageUrl: formData.image,
        breed: formData.breed,
        description: formData.description,
      };
      console.log("New Cat:", newCat); // Check new cat object
      cats.push(newCat);
      res.writeHead(302, { Location: "/" }); // Redirect to home page after adding cat
      res.end();
    });
  } else if (req.url === "/cats/add-cat") {
    // Handle GET request to /cats/add-cat
    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.write(addCatTemplate);
    res.end();
  } else if (req.url === "/cats/add-breed") {
    // Handle request to /cats/add-breed
    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.write(addBreedTemplate);
    res.end();
  } else {
    // Handle other requests (404)
    res.writeHead(404, {
      "content-type": "text/html",
    });
    res.write("<h1>404 Not Found</h1>");
    res.end();
  }
});

server.listen(5000);
console.log("Server is listening on port 5000...");
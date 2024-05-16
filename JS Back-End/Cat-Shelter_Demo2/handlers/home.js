const url = require("url");
const fs = require("fs");
const path = require("path");
const cats = require("../data/cats");
// const breeds = require("../data/breeds");

module.exports = (req, res) => {
  const { pathname, query } = url.parse(req.url, true);

  if (pathname === "/" && req.method === "GET") {
    let filePath = path.normalize(
      path.join(__dirname, "../views/home/index.html")
    );

    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        console.error(err);
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.write("Error: File Not Found");
        res.end();
        return;
      }

      let filteredCats = cats;
      if (query.search) {
        console.log("Cats before filtering:", cats);
        console.log("Search query received:", query.search);
        filteredCats = cats.filter(
          (cat) =>
            cat.name &&
            Array.isArray(cat.name) &&
            cat.name[0].toLowerCase().includes(query.search.trim().toLowerCase())
        );
        console.log("Filtered cats:", filteredCats);
      }

      // Generate HTML for each cat
      let modifiedCats = filteredCats
        .map((cat) => {
          return `<li>
        <img src="${cat.image[0]}" alt="${cat.name[0]}">
        <h3>${cat.name[0]}</h3>
        <p><span>Breed: </span>${cat.breed[0]}</p>
        <p><span>Description: </span>${cat.description[0]}</p>
        <ul class="buttons">
          <li class="btn edit"><a href="/cats-edit/${cat.id}">Change Info</a></li>
          <li class="btn delete"><a href="/cats-find-new-home/${cat.id}">New Home</a></li>
        </ul>
      </li>`;
        })
        .join("");

      let modifiedData = data
        .replace("{{cats}}", modifiedCats)
        .replace("{{searchQuery}}", query.search || "");

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(modifiedData);
      res.end();
    });
  } else {
    return true;
  }
};

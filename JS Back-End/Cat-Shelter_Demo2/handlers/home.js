const url = require("url");
const fs = require("fs");
const path = require("path");
const cats = require("../data/cats");
// const breeds = require("../data/breeds");

module.exports = (req, res) => {
  const pathname = url.parse(req.url).pathname;

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
      // Generate HTML for each cat
      let modifiedCats = cats
        .map((cat) => {
          return `<li>
        <img src="${cat.image}" alt="${cat.name}">
        <h3>${cat.name}</h3>
        <p><span>Breed: </span>${cat.breed}</p>
        <p><span>Description: </span>${cat.description}</p>
        <ul class="buttons">
          <li class="btn edit"><a href="/cats-edit/${cat.id}">Change Info</a></li>
          <li class="btn delete"><a href="/cats-find-new-home/${cat.id}">New Home</a></li>
        </ul>
      </li>`;
        })
        .join("");

      let modifiedData = data.replace("{{cats}}", modifiedCats);

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(modifiedData);
      res.end();
    });
  } else {
    return true;
  }
};

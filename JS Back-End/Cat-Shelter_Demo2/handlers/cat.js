const url = require("url");
const fs = require("fs");
const path = require("path");
const qs = require("querystring");
// const formidable = require("formidable");
const cats = require("../data/cats");
const breeds = require("../data/breeds");

//**USING CREATEREADSTREAM FUNCTION */
module.exports = (req, res) => {
  const pathname = url.parse(req.url).pathname;

  if (pathname === "/cats/add-cat" && req.method === "GET") {
    let filePath = path.normalize(path.join(__dirname, "../views/addCat.html"));

    const index = fs.createReadStream(filePath);

    index.on("data", (data) => {
      res.write(data);
    });

    index.on("end", () => {
      res.end();
    });

    index.on("error", (err) => {
      console.log(err);
    });
  } else if (pathname === "/cats/add-breed" && req.method === "GET") {
    let filePath = path.normalize(
      path.join(__dirname, "../views/addBreed.html")
    );

    const index = fs.createReadStream(filePath);

    index.on("data", (data) => {
      res.write(data);
    });

    index.on("end", () => {
      res.end();
    });

    index.on("error", (err) => {
      console.log(err);
    });
  } else {
    return true; 
  }
};

//**USING READFILE FUNCTION */
// module.exports = (req, res) => {
//   const pathname = url.parse(req.url).pathname;

//   if (pathname === "/cats/add-cat" && req.method === "GET") {
//     let filePath = path.normalize(path.join(__dirname, "../views/addCat.html"));

//     fs.readFile(filePath, (err, data) => {
//       if (err) {
//         console.log(err);

//         res.writeHead(404, { "Content-Type": "text/plain" });

//         res.write("Error: File Not Found");
//         res.end();

//         return;
//       } else {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write(data);
//         res.end();
//       }
//     });
//   } else if (pathname === "/cats/add-breed" && req.method === "GET") {
//     let filePath = path.normalize(
//       path.join(__dirname, "../views/addBreed.html")
//     );
//     console.log(filePath);

//     fs.readFile(filePath, (err, data) => {
//       if (err) {
//         console.log(err);

//         res.writeHead(404, { "Content-Type": "text/plain" });

//         res.write("Error: File Not Found");
//         res.end();

//         return;
//       } else {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write(data);
//         res.end();
//       }
//     });
//   } else {
//     return true;
//   }
// };

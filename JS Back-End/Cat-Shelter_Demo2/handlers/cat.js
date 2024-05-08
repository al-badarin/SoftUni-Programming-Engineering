const url = require("url");
const fs = require("fs");
const path = require("path");
const qs = require("querystring");
// const formidable = require("formidable");
const cats = require("../data/cats.json");
const breeds = require("../data/breeds.json");

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
      console.error("Failed to read the file:", err);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error: Unable to load the form.");
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
      console.error("Failed to read the file:", err);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error: Unable to load the form.");
    });
  } else if (pathname === "/cats/add-breed" && req.method === "POST") {
    let formData = "";

    req.on("data", (data) => {
      formData += data;
    });

    req.on("end", () => {
      let body = qs.parse(formData);

      const breedsFilePath = path.join(__dirname, "../data/breeds.json");

      fs.readFile(breedsFilePath, "utf-8", (err, data) => {
        if (err) {
          console.error("Error reading the file:", err);
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Failed to read breeds data");
          return;
        }

        let breeds = JSON.parse(data);
        breeds.push(body.breed);
        let json = JSON.stringify(breeds);

        fs.writeFile(breedsFilePath, json, "utf-8", (err) => {
          if (err) {
            console.error("Failed to write to file:", err);
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Failed to save breed");
            return;
          }
          console.log("The breed was uploaded successfully");
          res.writeHead(302, { Location: "/" });
          res.end();
        });
      });
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

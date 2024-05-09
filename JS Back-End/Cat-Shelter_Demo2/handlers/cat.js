const url = require("url");
const fs = require("fs");
const path = require("path");
const qs = require("querystring");
const formidable = require("formidable");
const cats = require("../data/cats.json");
const breeds = require("../data/breeds.json");

//**USING CREATEREADSTREAM FUNCTION */
module.exports = (req, res) => {
  const pathname = url.parse(req.url).pathname;

  if (pathname === "/cats/add-cat" && req.method === "GET") {
    let filePath = path.normalize(path.join(__dirname, "../views/addCat.html"));
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        console.error("Failed to read the file:", err);
        res.writeHead(500, { "Contnent-Type": "text/plain" });
        res.end("Internal Server Error: Unable to load the form.");
        return;
      }

      // Read breeds.json to generate options for the breed selector
      const breedsFilePath = path.join(__dirname, "../data/breeds.json");
      fs.readFile(breedsFilePath, "utf-8", (err, breedsData) => {
        if (err) {
          console.error("Failed to read breeds file:", err);
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Internal Server Error: Unable to load breeds.");
          return;
        }

        // Generate HTML string for breed options
        let breeds = JSON.parse(breedsData);
        let breedOptions = breeds
          .map((breed) => `<option value="${breed}">${breed}</option>`)
          .join("");
        let modifiedData = data.replace(`{{catBreeds}}`, breedOptions);

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(modifiedData);
      });
    });
  } else if (pathname === "/cats/add-cat" && req.method === "POST") {
    const form = new formidable.IncomingForm();

    // Parse the form
    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error("Error parsing the form:", err);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error: Unable to process the form.");
        return;
      }

      console.log("Parsed fields:", fields);

      // Read the existing cats data
      const catsFilePath = path.join(__dirname, "../data/cats.json");
      fs.readFile(catsFilePath, "utf-8", (err, data) => {
        if (err) {
          console.error("Failed to read cats file:", err);
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Internal Server Error: Unable to load cats data.");
          return;
        }

        // Add new cat to the array
        let cats = JSON.parse(data);
        let newCat = {
          id: cats.length + 1,
          name: fields.name,
          description: fields.description,
          image: fields.image,
          breed: fields.breed,
        };

        cats.push(newCat);

        // Save the updated cats array back to the file
        fs.writeFile(
          catsFilePath,
          JSON.stringify(cats, null, 2),
          "utf-8",
          (err) => {
            if (err) {
              console.error("Failed to save the new cat:", err);
              res.writeHead(500, { "Content-Type": "text/plain" });
              res.end("Internal Server Error: Unable to save new cat.");
              return;
            }

            console.log("New cat added successfully");
            res.writeHead(302, { Location: "/" });
            res.end();
          }
        );
      });
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
  } else if (pathname.includes("/cats-edit") && req.method === "GET") {
    const catId = pathname.split("/")[2];
    console.log(catId);
    const cat = cats.find((c) => c.id == catId);

    if (!cat) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Cat not found");
      return;
    }

    fs.readFile(
      path.join(__dirname, "../views/editCat.html"),
      "utf-8",
      (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Failed to load the edit page");
          return;
        }

        let modifiedData = data
          .replace("{{id}}", cat.id)
          .replace("{{name}}", cat.name)
          .replace("{{description}}", cat.description)
          .replace("{{image}}", cat.image)
          .replace(
            "{{catBreeds}}",
            breeds
              .map(
                (b) =>
                  `<option value="${b}"${
                    b === cat.breed ? " selected" : ""
                  }>${b}</option>`
              )
              .join("")
          );

        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(modifiedData);
        res.end();
      }
    );
  } else if (pathname.includes("/cats-edit") && req.method === "POST") {
    // TODO: ...

    



  } else if (pathname.includes("/cats-find-new-home") && req.method === "GET") {
    // TODO: ...
  } else if (
    pathname.includes("/cats-find-new-home") &&
    req.method === "POST"
  ) {
    // TODO: ...
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

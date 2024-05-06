const http = require("http");
const fs = require("fs");
const path = require("path");
const port = 3000;
const handlers = require("./handlers");

http
  .createServer((req, res) => {
    for (let handler of handlers) {
      if (!handler(req, res)) {
        break;
      }
    }
  })
  .listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
  });

// http
//   .createServer((req, res) => {
//     console.log("Requested Path:", req.url);

//     if (req.url === "/") {
//       // Serve the home page HTML
//       const filePath = path.join(__dirname, "index.html"); // Make sure the path is correct
//       fs.readFile(filePath, (err, data) => {
//         if (err) {
//           res.writeHead(404);
//           res.end("Error: File Not Found");
//         } else {
//           res.writeHead(200, { "Content-Type": "text/html" });
//           res.end(data);
//         }
//       });
//     } else if (req.url === "/favicon.ico") {
//       res.writeHead(204);
//       res.end();
//     } else {
//       res.writeHead(404);
//       res.end("Not Found");
//     }
//   })
//   .listen(port, () => {
//     console.log(`Server is listening on port ${port}...`);
//   });

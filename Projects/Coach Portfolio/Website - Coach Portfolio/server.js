const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000; // Set the port for your server

const server = http.createServer((req, res) => {
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );
  let contentType = getContentType(filePath) || "text/html";

  // Check if the requested file exists
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        // Page not found
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 Page Not Found</h1>");
      } else {
        // Server error
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("<h1>500 Internal Server Error</h1>");
      }
    } else {
      // Success, send the requested file
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});

// Function to get the content type based on file extension
function getContentType(filePath) {
  let extname = path.extname(filePath);
  switch (extname) {
    case ".html":
      return "text/html";
    case ".css":
      return "text/css";
    case ".js":
      return "text/javascript";
    case ".json":
      return "application/json";
    case ".png":
      return "image/png";
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    default:
      return "text/plain";
  }
}

// Start the server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const http = require("http");
const logger = require("./logger");

const server = http.createServer((req, res) => {
  logger(`URL: ${req.url}; METHOD: ${req.method}`);

  // TODO: Handle request

  res.end();
});

server.listen(5000);
console.log("Server is listening on port 5000...");

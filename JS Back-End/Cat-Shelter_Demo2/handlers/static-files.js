const url = require("url");
const fs = require("fs");
const path = require("path");

function getContentType(url) {
  if (url.endsWith(".css")) {
    return "text/css";
  } else if (url.endsWith(".html")) {
    return "text/html";
  } else if (url.endsWith(".js")) {
    return "application/javascript";
  } else if (url.endsWith(".png")) {
    return "image/png";
  } else if (url.endsWith(".jpg") || url.endsWith(".jpeg")) {
    return "image/jpeg";
  } else if (url.endsWith(".svg")) {
    return "image/svg+xml";
  } else if (url.endsWith(".json")) {
    return "application/json";
  } else if (url.endsWith(".pdf")) {
    return "application/pdf";
  } else if (url.endsWith(".txt")) {
    return "text/plain";
  } else if (url.endsWith(".gif")) {
    return "image/gif";
  } else if (url.endsWith(".ico")) {
    return "image/x-icon";
  } else if (url.endsWith(".xml")) {
    return "application/xml";
  } else if (url.endsWith(".mp4")) {
    return "video/mp4";
  } else if (url.endsWith(".mp3")) {
    return "audio/mpeg";
  } else if (url.endsWith(".woff")) {
    return "font/woff";
  } else if (url.endsWith(".woff2")) {
    return "font/woff2";
  } else if (url.endsWith(".ttf")) {
    return "font/ttf";
  } else if (url.endsWith(".otf")) {
    return "font/otf";
  } else if (url.endsWith(".webp")) {
    return "image/webp";
  }
  return "application/octet-stream"; // Generic binary MIME type for unknown types
}

module.exports = (req, res) => {
  const pathname = url.parse(req.url).pathname;

  if (pathname.startsWith("/content") && req.method === "GET") {
    fs.readFile(`./${pathname}`, "utf-8", (err, data) => {
      if (err) {
        console.log(err);

        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end();
        return;
      }

      console.log(pathname);
      res.writeHead(200, { "Content-Type": getContentType(pathname) });

      res.write(data);
      res.end();
    });
  } else {
    return true;
  }
};

const fs = require("fs");

const readStream = fs.createReadStream("./data/input.txt", {
  encoding: "utf-8",
  highWaterMark: 1000,
});

const writeStream = fs.createWriteStream("./data/copy.txt", "utf-8");

readStream.on("data", (chunk) => {
  writeStream.write("\n--------new chunk---------\n");
  writeStream.write(chunk);
});

readStream.on("close", () => {
  writeStream.end();
});

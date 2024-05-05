const fs = require("fs");

fs.writeFile("./created.txt", "Hello, world!", { encoding: "utf-8" }, (err) => {
  if (err) {
    return "Error occured!";
  }

  console.log("File is created!");
});

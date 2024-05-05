// const fs = require("fs");
const fs = require("fs/promises");

// *SYNCHRONOUS
// const text = fs.readFileSync("./data.txt", { encoding: "utf-8" });
// console.log(text);

// **ASYNCHRONOUS with Callback
// console.log(1);
// const text = fs.readFile("./data.txt", { encoding: "utf-8" }, (err, result) => {
//   if (err) {
//     console.log("There is a problem with the filesystem");
//     return;
//   }
//   console.log(2);

//   console.log(text);
// });
// console.log(3);

// ***ASYNCHRONOUS with Promises
fs.readFile("./data.txt", { encoding: "utf-8" })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log("There is a problem with the filesystem");
  });

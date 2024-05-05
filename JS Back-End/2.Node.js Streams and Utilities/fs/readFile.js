const fs = require("fs");

// SYNCHRONOUS
const text = fs.readFileSync("./data.txt", { encoding: "utf-8" });
console.log(text);

// ASYNCHRONOUS with Callback


// ASYNCHRONOUS with Promises

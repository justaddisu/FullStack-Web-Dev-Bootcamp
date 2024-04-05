const fs = require("fs");

fs.copyFileSync("text.txt", "text2.txt");

console.log("text.tet contents are copy to text2.txt");
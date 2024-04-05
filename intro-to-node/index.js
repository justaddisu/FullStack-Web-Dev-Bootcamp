const fs = require("fs");
const superheroes = require("superheroes");
const supervillains = require('supervillains');


fs.copyFileSync("text.txt", "text2.txt");

console.log(superheroes.random());
console.log(supervillains.random());

console.log("Hello addisu, I am working ...");
//jshint esversion:6

// const fs = require("fs");

// fs.copyFileSync("file.txt", "file2.txt");

// //https://stackoverflow.com/questions/56805007/npm-warn-npm-does-not-support-node-js-v12-4-0

var superheroes = require("superheroes");
var mySuperheroName = superheroes.random();
console.log(mySuperheroName);

var superVillains = require("supervillains");
var mySuperVillainName = superVillains.random();
var allSuperVillains = superVillains.all;
console.log(mySuperVillainName);
console.log(allSuperVillains);
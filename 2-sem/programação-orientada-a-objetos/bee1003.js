var input = require("fs").readFileSync("data", "utf8");
var lines = input.split("\n");

const sum = lines.reduce((prev, curr) => Number(prev) + Number(curr));
console.log(`SOMA = ${sum}`);

var input = require("fs").readFileSync("data", "utf8");
var lines = input.split("\n");

const values = lines[0].split(" ");

const A = Number(values[0]);
const B = Number(values[1]);

if (A === B) {
  console.log(values[0]);
  return;
}

const greater = A > B ? A : B;
console.log(`${greater}`);


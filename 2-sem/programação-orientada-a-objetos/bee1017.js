var input = require("fs").readFileSync("data", "utf8");
var lines = input.split("\n");

const kilometersByLiters = 12;
const time = Number(lines[0]);
const velocity = Number(lines[1]);

const totalKilomenters = time * velocity;
const consumption = totalKilomenters / kilometersByLiters;

console.log(consumption.toFixed(3).toString());

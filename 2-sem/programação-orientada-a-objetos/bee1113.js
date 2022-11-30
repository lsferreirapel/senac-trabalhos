var input = require("fs").readFileSync("data", "utf8");
var lines = input.split("\n");

for (var index in lines) {
  const values = lines[index].split(" ");

  if (Number(values[0]) > Number(values[1])) {
    console.log("Decrescente");
  } else if (Number(values[0]) < Number(values[1])) {
    console.log("Crescente");
  } else {
    break;
  }
}

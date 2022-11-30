var input = require("fs").readFileSync("data", "utf8");
var lines = input.split("\n");

function isValidInput(input) {
  return input === 0 || input === 1;
}

lines.forEach((line) => {
  const values = line.split(" ");
  const A = Number(values[0]);
  const B = Number(values[1]);
  const C = Number(values[2]);

  if (!isValidInput(A) || !isValidInput(B) || !isValidInput(C)) return;

  let winner = "*";

  if (A === B && A !== C) {
    winner = "C";
  } else if (A === C && A !== B) {
    winner = "B";
  } else if (C === B && C !== A) {
    winner = "A";
  }

  console.log(winner);
});

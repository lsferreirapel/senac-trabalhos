var input = require("fs").readFileSync("data", "utf8");
var lines = input.split("\n");

for (var index in lines) {
  if (lines[index] === "2002") {
    console.log("Acesso Permitido");
    break;
  }
  console.log("Senha Invalida");
}


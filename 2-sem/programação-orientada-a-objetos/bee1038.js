var input = require("fs").readFileSync("data", "utf8");
var lines = input.split(" ");

const products = [
  { code: "1", price: 4 },
  { code: "2", price: 4.5 },
  { code: "3", price: 5 },
  { code: "4", price: 2 },
  { code: "5", price: 1.5 },
];

const selectedProduct = products.find((product) => product.code === lines[0]);

if (!selectedProduct) return;

const totalPrice = selectedProduct.price * Number(lines[1]);

console.log(`Total: R$ ${totalPrice.toFixed(2)}`);

const prompt = require('prompt-sync')()

const amount = Number(prompt('Quantidade de litros: '))
const fuelType = prompt('Tipo do combustivel A - álcool, G - Gasolina: ')?.toUpperCase()

let discount;
let fuelPrice;
let totalPrice;

if (fuelType === "G") {
  fuelPrice = 7;
  discount = (fuelPrice * amount) * 0.05;
  if (amount >  25) {
    discount = (fuelPrice * amount) * 0.08;
  }
  totalPrice = (fuelPrice * amount) - discount
} else if (fuelType === "A") {
  fuelPrice = 5;
  discount = (fuelPrice * amount) * 0.04;
  if (amount >  30) {
    discount =(fuelPrice * amount) * 0.06;
  }
  totalPrice = (fuelPrice * amount) - discount
} else {
  console.log("Tipo de combustivel não encontrado!");
  return;
}

console.log(`Você deve pagar: R$ ${totalPrice.toFixed(2)}`);


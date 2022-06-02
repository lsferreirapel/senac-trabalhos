// import { prompt } from "../../utils.js";
const prompt = require("prompt-sync")();

/*
1.  Elaborar um programa que leia um número. Informe os pares até esse número e, 
    em outra linha, os ímpares até esse número, Inserir vírgulas entre os números - 
    conforme o exemplo.

    Número: 12
    Pares até 12: 2, 4, 6, 8, 10, 12
    Ímpares até 12: 1, 3, 5 , 7 ,9, 111
*/
const number = Number(prompt("Número: "));

const evenNumbers = [];
const oddNumber = [];

for (let i = 1; i <= number; i++) {
  if (i % 2 === 0) evenNumbers.push(i);
  else oddNumber.push(i);
}
console.log(`Pares até ${number}: ` + evenNumbers.join(", "));
console.log(`Ímpares até ${number}: ` + oddNumber.join(", "));

/*
2.  Elaborar um programa para um campeonato de tênis de mesa. Ler o nome de dois 
    jogadores e resultado da partida. Exiba uma mensagem com o nome do jogador vencedor 
    (não pode haver empate). Solicitar se o usuário deseja continuar ou não, repetindo 
    até ser digitado "N" ou "n". Ao final, exiba o total de partidas e de sets jogados

    Campeonato de Tênis de Mesa
    ----------------------------------
    Jogador #1: Marcelo
    Sets Vencidos: 2
    Jogador #2: Francisco
    Sets Vencidos: 3
    Francisco venceu o jogo por 3 x 2
    Continuar (S/N): S
*/
let matches = 0;
let sets = 0;
console.log("Campeonato de Tênis de Mesa");
console.log("-".repeat(35));
while (true) {
  const player1 = prompt("Jogador #1: ");
  const player1Score = Number(prompt("Sets Vencidos: "));

  const player2 = prompt("Jogador #2: ");
  const player2Score = Number(prompt("Sets Vencidos: "));

  matches++;
  sets += player1Score + player2Score;

  if (player1Score === player2Score) {
    console.log("Não pode haver empate");
    break;
  }

  const winner =
    player1Score > player2Score
      ? { player: player1, score: player1Score }
      : { player: player2, score: player2Score };
  const loser =
    winner.player === player2
      ? { player: player1, score: player1Score }
      : { player: player2, score: player2Score };

  console.log(
    `${winner.player} venceu o jogo por ${winner.score} x ${loser.score}`
  );

  const response = prompt("Continuar (S/N): \n");
  if (response.toLocaleUpperCase() === "N") {
    break;
  }
}
console.log("-".repeat(35));
console.log(`Foram disputadas: ${matches} partidas`);
console.log(`Total de Sets: ${sets}`);

/*
3.  Elaborar um programa que leia um número e um símbolo. Monte um quadrado, com 
    o símbolo repetido no número de colunas e linhas, confome o exemplo.

    Número: 10
    Símolo: *
    * * * * * * * * * *
    * * * * * * * * * *
    * * * * * * * * * *
    * * * * * * * * * *
    * * * * * * * * * *
    * * * * * * * * * *
    * * * * * * * * * *
    * * * * * * * * * *
    * * * * * * * * * *
    * * * * * * * * * *
*/
const number = Number(prompt("Número: "));
const symbol = prompt("Símolo: ");

let row = [];
for (let i = 1; i <= number; i++) {
  for (let j = 1; j <= number; j++) {
    row.push(symbol);
  }
  console.log(row.join(" "));
  row = [];
}

/*
4.  Um número é dito perfeito, quando é igual à soma dos seus divisores (exeto ele mesmo).
    Elaborar um programa que leia um númeo, mostre os seus divisores e a soma deles 
    e informe se ele é ou não perfeito.

    Número: 28
    Divisores do 28: 1, 2 ,4, 7, 14
    Soma dos divisores: 28
    Portanto, 28 é um número PERFEITO
*/
const number = Number(prompt("Número: "));

const dividers = [];
for (let i = 0; i < number; i++) {
  if (number % i === 0) dividers.push(i);
}
const sum = dividers.reduce((prev, curr) => prev + curr);

console.log(`Divisores do ${number}: ` + dividers.join(", "));
console.log(`Soma dos divisores: ${sum}`);

if (sum === number) console.log(`Portanto, ${number} é um número PERFEITO`);
else console.log(`Portanto, ${number} não é um número PERFEITO`);

/*
5.  Elaborar um programa que leia o nome de 'n' competidores, até ser digitado 'Fim'
    no nome. Após, liste os competidores em ordem inversa da inserção - conforme o exemplo.

   Informe os competidores ou "Fim" oara sair
   ----------------------------------------------
   1⁰ Competidor: Ricardo
   2⁰ Competidor: Paulo
   3⁰ Competidor: Alex
   4⁰ Competidor: Maurício
   5⁰ Competidor: Bruno
   6⁰ Competidor: Fim

   Lista dos Competidores
   -------------------------
   Bruno
   Maurício
   Alex
   Paulo
   Ricardo
*/
let count = 1;
const players = [];
console.log('Informe os competidores ou "Fim" oara sair');
console.log("-".repeat(35));
while (true) {
  const player = prompt(`${count}⁰ Competidor: `);

  if (player.toUpperCase() === "FIM") break;

  players.push(player);
  count++;
}
console.log("\nLista dos Competidores");
console.log("-".repeat(35));
players.reverse().forEach((player) => console.log(player));

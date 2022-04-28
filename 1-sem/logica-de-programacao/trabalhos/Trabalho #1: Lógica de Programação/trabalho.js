// const prompt = require("prompt-sync")();
import { prompt } from "../../utils.js";

/*
1. Elabore um programa que leia nome de uma cidade e número de avenidas que a 
cidade possui. Exiba uma mensagem com os dados de entrada, conforme o exemplo.
*/
const city = prompt("Cidade: ");
const numberOfAvenes = Number(prompt("N⁰ de Avenidas: "));

console.log(`A cidade de ${city} possui ${numberOfAvenes} avenidas`);

/* 
2. Elabore um programa que leia a quantidade de ovos obtidos em uma fazenda. 
Exiba quantas caixas de dúzias de ovos podem ser preenchidas com a quantidade 
colhida. Arredondar para baixo e mostrar apenas o número inteiro de caixas 
preenchidas, conforme o exemplo.
*/

const nubmerOfEggs = Number(prompt("N⁰ de Ovos: "));

const numberOfEggCartons = Math.trunc(nubmerOfEggs / 12);

console.log(`Pode-se preencher ${numberOfEggCartons} caixas de ovos`);

/*
3. Elabore um programa que leia o nome e número de meses de um bebê. 
Exiba a idade do bebê em anos e meses, conforme o exemplo.
*/
const name = prompt("Nome: ");
const ageInMonths = Number(prompt("N⁰ meses: "));

const years = Math.trunc(ageInMonths / 12);
const months = ageInMonths % 12;

console.log(`${name} possui ${years} ano(s) e ${months} meses`);

/* 
4.  Elabore um programa que leia nome e gols que um jogador fez em uma partida, 
Exiba uma das seguintes mensagens de acordo com os dados de entrada:
a) "X , você não marcou gol",
b) "X , você fez apenas 1 gol",
c) "X , você fez Y gols, parabéns!",
*/
const player = prompt("Jogador: ");
const goals = Number(prompt("N⁰ de Gols: "));

switch (goals) {
  case 0:
    console.log(`${player}, você não marcou gol`);
    break;
  case 1:
    console.log(`${player}, você fez apenas 1 gol`);
    break;
  default:
    console.log(`${player}, você fez ${goals} gols, parabéns!`);
    break;
}

/* 
5. Elabore um programa que leia nome, n⁰ de alunos da turma e número de mensagens 
que um aluno recebeu no WhatsApp. Se o número de mensagens for inferior a 50% dos 
alunos da turma, exiba:
 X, temos que melhorar a sua popularidade", senão exiba 
 "Parabéns X! Você é bem popular na turma"
*/
const student = prompt("Aluno: ");
const numberOfStudents = Number(prompt("N⁰ Alunos na turma: "));
const numberOfMessages = Number(prompt("N⁰ Mensagens: "));

if (numberOfMessages < 0.5 * numberOfStudents) {
  console.log(`${student}, temos que melhorar a sua popularidade`);
} else {
  console.log(`Parabéns ${student}! Você é bem popular na turma`);
}

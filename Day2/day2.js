const username = prompt("Qual é o seu nome?");
const userAge = prompt("Qual é a sua idade?");
const userlang = prompt("Qual linguagem de programação você está estudando?");

const message = `Olá, ${username}! Você tem ${userAge} anos e está estudando ${userlang}.`;

alert(message);

const isUserLikingLang = prompt("Você gosta de estudar essa linguagem? [s/n]");
if (isUserLikingLang === "s") {
  alert("Que legal! Continue praticando e você ficará craque!");
} else {
  alert("Que pena! Talvez seja legal tentar outra linguagem.");
}

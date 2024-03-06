let randomNum = Math.floor(Math.random() * 10);
console.log(randomNum);
let userGuess = null;
let attempts = 0;
const maxAttempts = 3;
let tryAgain = false;
let winState = false;

function hint() {
    if (userGuess < randomNum) {
        alert("O número que estou pensando é maior que " + userGuess + "!");
    } else {
        alert("O número que estou pensando é menor que " + userGuess + "!");
    }
}

function newGame() {
    randomNum = Math.floor(Math.random() * 10);
    console.log(randomNum);
    userGuess = null;
    attempts = 0;
    winState = false;
}

while (winState === false) {
    userGuess = parseInt(prompt("Adivinhe o número que estou pensando!\nTentativas restantes: " + (maxAttempts - attempts)));
    if (userGuess === randomNum) {
        alert("Parabéns! Você acertou!");
        winState = true;
        break;
    } else {
        attempts++;
        if (attempts === maxAttempts) {
            alert("Que pena! Suas tentativas acabaram! O número era " + randomNum + "!");
            if (confirm("Deseja jogar novamente?")) {
                newGame();
                continue;
            }
            break;
        }
        alert("Que pena! Tente novamente!");
        hint();
    }
}
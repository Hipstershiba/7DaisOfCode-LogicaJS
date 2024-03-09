const username = prompt("Qual o neu nome?");
let userProgramingArea
let userAnswer;
let unstuckloop = 0;
while (userAnswer !== "1" && userAnswer !== "2") {
    userAnswer = prompt("Olá, " + username + "!\nQual área da programação você deseja seguir?\n1 - Front-end\n2 - Back-end");
    if (userAnswer === "1") {
        userProgramingArea = "Front-end";
    } else if (userAnswer === "2") {
        userProgramingArea = "Back-end";
    } else {
        alert("Por favor, escolha uma opção válida!");
        if (unstuckloop === 5) {
            alert("Por favor, recarregue a página e tente novamente!");
            break;
        }
        unstuckloop++;
    }
}
unstuckloop = 0;
userAnswer = null;
while (userAnswer !== "1" && userAnswer !== "2") {
    let option1;
    let option2;
    if (userProgramingArea === "Front-end") {
        option1 = "React";
        option2 = "Vue";
    } else {
        option1 = "C#";
        option2 = "Java";
    }
    userAnswer = prompt(userProgramingArea + " é uma ótima escolha!\nQual linguagem aprender:\n1 - " + option1 + "\n2 - " + option2);
    if (userAnswer === "1") {
        alert("Excelente! Você escolheu " + option1 + "!");
        console.log(userAnswer);
    } else if (userAnswer === "2") {
        alert("Excelente! Você escolheu " + option2 + "!");
        console.log(userAnswer);
    } else {
        alert("Por favor, escolha uma opção válida!");
        if (unstuckloop === 5) {
            alert("Por favor, recarregue a página e tente novamente!");
            break;
        }
        unstuckloop++;
    } 
}
unstuckloop = 0;
userAnswer = null;
while(userAnswer !== "1" && userAnswer !== "2") { 
    userAnswer = prompt("Você deseja se aprofundar em "+ userProgramingArea + " ou deseja se tornar FullStack?\n1 - Aprofundar\n2 - FullStack");
    if (userAnswer === "1") {
        alert("Especialistas são muito valorizados no mercado! Boa sorte na sua jornada como " + userProgramingArea + "!");
    } else if (userAnswer === "2") {
        alert("Ótima escolha! FullStack é uma área muito promissora!");
    } else {
        alert("Por favor, escolha uma opção válida!");
        if (unstuckloop === 5) {
            alert("Por favor, recarregue a página e tente novamente!");
            break;
        }
        unstuckloop++;
    }
}
unstuckloop = 0;
userAnswer = null;
while (userAnswer !== "2") {
    let tecnology = prompt("Quais são as tecnologias que você deseja se especializar?");
    userAnswer = prompt("Deseja se especializar em alguma outra tecnologia?\n1 - SIM\n2 - NÃO");
    if (userAnswer === "1") {
    } else if (userAnswer === "2") {
        userProgramingArea = "Back-end";
    } else {
        alert("Por favor, escolha uma opção válida!");
        if (unstuckloop === 5) {
            alert("Por favor, recarregue a página e tente novamente!");
            break;
        }
        unstuckloop++;
    }
}
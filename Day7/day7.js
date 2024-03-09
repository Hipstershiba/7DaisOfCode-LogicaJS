function run() {
    let running = true
    alert("Bem vindo a calculadora 7DaysOfCode.js!");
    while(running) {
        switch(chooseOperation()) {
            case "1":
                somar(getValues());
                break;
            case "2":
                subtrair(getValues());
                break;
            case "3":
                multiplicar(getValues());
                break;
            case "4":
                dividir(getValues());
                break;
            case "5":
                alert("Até a próxima!");
                running = false;
                break;
            default:
                alert("Operação inválida");
        }
    }
}

function chooseOperation() {
    let operation = prompt("Qual operação deseja realizar?\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n5 - Sair");
    return operation;
}

function getValues() {
    let num1 = parseFloat(prompt("Digite o primeiro número"));
    let num2 = parseFloat(prompt("Digite o segundo número"));
    return [num1, num2];
}

function somar(values) {
    alert(`O resultado da soma é: ${values[0] + values[1]}`);
}

function subtrair(values) {
    alert(`O resultado da subtração é: ${values[0] - values[1]}`);
}

function multiplicar(values) {
    alert(`O resultado da multiplicação é: ${values[0] * values[1]}`);
}

function dividir(values) {
    alert(`O resultado da divisão é: ${values[0] / values[1]}`);
}

run();
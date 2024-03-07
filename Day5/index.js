let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];

function run() {
    console.log('I am running');
    if (confirm("Deseja criar uma lista de compras?")) {
        let newItemLoop = true;
        while (newItemLoop) {
            let userAnswer = prompt("Deseja adicionar um item?\n1 - Sim\n2 - Não");
            if (userAnswer === "1") {
                chooseCategory();
            } else if (userAnswer === "2") {
                newItemLoop = false;
            } else {
                alert("Opção inválida");
            }
        }
        printShoppingList();
    }
}

function chooseCategory() {
    let category = prompt("Qual categoria deseja adicionar?\n1 - Frutas\n2 - Laticínios\n3 - Congelados\n4 - Doces\n5 - Sair");
    switch (category) {
        case "1":
            frutas.push(getItem());
            break;
        case "2":
            laticinios.push(getItem());
            break;
        case "3":
            congelados.push(getItem());
            break;
        case "4":
            doces.push(getItem());
            break;
        case "5":
            break;
        default:
            alert("Opção inválida");
            break;
    }
}

function getItem() {
    let item = prompt("Qual item deseja adicionar?");
    return item;
}

function printShoppingList() {
    alert("Sua lista de compras:\nFrutas: " + frutas.join(", ") + "\nLaticínios: " + laticinios.join(", ") + "\nCongelados: " + congelados.join(", ") + "\nDoces: " + doces.join(", "));
}

run();
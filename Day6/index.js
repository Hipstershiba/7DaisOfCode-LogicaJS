let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];

function run() {
    console.log('I am running');
    if (confirm("Deseja criar uma lista de compras?")) {
        let isListDone = false;
        while (!isListDone) {
            let userAnswer = prompt("A lista está completa?\n1 - Desejo adicionar mais itens\n2 - Desejo remover itens\n3 - Sim!\n4 - Sair");
            switch (userAnswer) {
                case "1":
                    addItem();
                    break;
                case "2":
                    removeItem();
                    break;
                case "3":
                    isListDone = true;
                    break;
                case "4":
                    if (confirm("Deseja realmente sair?")) {
                        isListDone = true;
                    }
                    break;
                default:
                    alert("Opção inválida");
                    break;
            }
        }
        printShoppingList();
    }
}

function chooseCategory() {
    let category = prompt("Qual categoria deseja adicionar?\n1 - Frutas\n2 - Laticínios\n3 - Congelados\n4 - Doces\n5 - Sair");
    switch (category) {
        case "1":
            return "frutas";
        case "2":
            return "laticinios";
        case "3":
            return "congelados";
        case "4":
            return "doces";
        case "5":
            return "sair";
        default:
            alert("Opção inválida");
            break;
    }
}

function addItem() {
    switch (chooseCategory()) {
        case "frutas":
            frutas.push(prompt("Qual fruta deseja adicionar?"));
            break;
        case "laticinios":
            laticinios.push(prompt("Qual laticínio deseja adicionar?"));
            break;
        case "congelados":
            congelados.push(prompt("Qual congelado deseja adicionar?"));
            break;
        case "doces":
            doces.push(prompt("Qual doce deseja adicionar?"));
            break;
        default:
            break;
    }
}

function removeItem() {
    switch (chooseCategory()) {
        case "frutas":
            let selectedItem = prompt("Qual fruta deseja remover?:\n  " + frutas.join(";\n    "));
            frutas = frutas.filter(item => item !== selectedItem);
            break; 
        case "laticinios":
            selectedItem = prompt("Qual laticínio deseja remover?:\n  " + laticinios.join(";\n    "));
            laticinios = laticinios.filter(item => item !== selectedItem);
            break;
        case "congelados":
            selectedItem = prompt("Qual congelado deseja remover?:\n  " + congelados.join(";\n    "));
            congelados = congelados.filter(item => item !== selectedItem);
            break;
        case "doces":
            selectedItem = prompt("Qual doce deseja remover?:\n  " + doces.join(";\n    "));
            doces = doces.filter(item => item !== selectedItem);
            break;
        default:
            break;
    }    
}

function printShoppingList() {
    alert("Sua lista de compras:\nFrutas:\n    " + frutas.join(",\n    ") + "\nLaticínios:\n    " + laticinios.join(",\n    ") + "\nCongelados:\n    " + congelados.join(",\n    ") + "\nDoces:\n    " + doces.join(",\n    "));
}

run();
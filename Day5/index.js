function run() {
    console.log('I am running');
    if (confirm("Deseja criar uma lista de compras?")) {
        let frutas = [];
        let laticinios = [];
        let congelados = [];
        let doces = [];
        let newItemLoop = true;
        while (newItemLoop) {
            let category = chooseCategory();
            if (category !== "5") {
                let item = getItem();
            }
            newItemLoop = confirm("Deseja adicionar um item?")
        } 
    }
}

function chooseCategory() {
    let category = prompt("Qual categoria deseja adicionar?\n1 - Frutas\n2 - Laticínios\n3 - Congelados\n4 - Doces\n5 - Sair");
    return category;
}

function getItem() {
    let item = prompt("Qual item deseja adicionar?");
    return item;
}

run();
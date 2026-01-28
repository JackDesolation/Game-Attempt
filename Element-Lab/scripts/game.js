let funds = 0;
let fundsPerSec = 0;

let ownedElements = ["Hydrogen"];
let compounds = [];
let colliderBuilt = false;

function recalcIncome() {
    fundsPerSec = 0;
    compounds.forEach(c => fundsPerSec += c.income);
}

setInterval(() => {
    funds += fundsPerSec / 10;
}, 100);


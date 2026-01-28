const marketElements = [
    { name:"Oxygen", cost:100 },
    { name:"Carbon", cost:250 },
    { name:"Nitrogen", cost:500 },
    { name:"Sodium", cost:1000 },
    { name:"Chlorine", cost:1500 }
];

function log(msg) {
    const l = document.getElementById("log");
    l.innerHTML += msg + "<br>";
    l.scrollTop = l.scrollHeight;
}

function buyElement(name, cost) {
    if (funds >= cost && !ownedElements.includes(name)) {
        funds -= cost;
        ownedElements.push(name);
        log(`🧬 Acquired element: ${name}`);
    }
}

function attemptReaction() {
    for (const r of reactions) {
        if (
            r.inputs.every(i => ownedElements.includes(i)) &&
            !compounds.find(c => c.name === r.output)
        ) {
            compounds.push({ name:r.output, income:r.income });
            recalcIncome();
            log(`⚗️ New compound discovered: ${r.output}`);
            return;
        }
    }
    log("❌ No new viable reactions found.");
}

function updateUI() {
    document.getElementById("funds").textContent = funds.toFixed(1);
    document.getElementById("fps").textContent = fundsPerSec.toFixed(1);

    document.getElementById("elements").innerHTML =
        ownedElements.map(e => `• ${e}`).join("<br>");

    document.getElementById("compounds").innerHTML =
        compounds.map(c => `<div class="compound">• ${c.name} (+$${c.income}/s)</div>`).join("");

    document.getElementById("market").innerHTML =
        marketElements.map(e =>
            `<button onclick="buyElement('${e.name}', ${e.cost})">
                ${e.name} — $${e.cost}
            </button>`
        ).join("<br>");
}

setInterval(updateUI, 100);
log("🧪 Lab initialized. Starting element: Hydrogen.");


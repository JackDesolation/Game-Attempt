function buildCollider() {
    if (funds >= 10000 && !colliderBuilt) {
        funds -= 10000;
        colliderBuilt = true;
        log("⚛️ Particle Collider constructed. Reality is now optional.");
    }
}

function colliderExperiment() {
    if (!colliderBuilt) {
        log("❗ Collider not available.");
        return;
    }

    const name =
        "X-" +
        String.fromCharCode(65 + Math.floor(Math.random()*26)) +
        Math.floor(Math.random()*9000 + 1000);

    const stability = Math.floor(Math.random() * 100);
    const energy = Math.floor(Math.random() * 200);
    const income = Math.max(1, Math.floor((stability + energy) / 35));

    compounds.push({ name, income });
    recalcIncome();

    log(`<span class="fictional">
        ⚛️ Fictional Element Created: ${name}<br>
        Stability: ${stability} | Energy Density: ${energy}
    </span>`);
}


function buildCollider() {
    if (funds >= 10000 && !colliderBuilt) {
        funds -= 10000;
        colliderBuilt = true;
        log("⚛️ Collider online.");
    }
}

function colliderExperiment() {
    if (!colliderBuilt) return log("❗ No collider.");
    const name="X-"+Math.floor(Math.random()*9999);
    const income=Math.floor(Math.random()*10)+5;
    compounds.push({name,income});
    recalc();
    log(`⚛️ Fictional element created: ${name}`);
}

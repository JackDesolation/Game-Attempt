let colliderCharging = false;

function startColliderCharge() {
  if (!colliderBuilt) return log("❗ Collider not built.");
  if (colliderCharging) return;

  colliderCharging = true;
  log("⚛️ Collider charging... (60 seconds)");

  setTimeout(() => {
    colliderCharging = false;
    fireCollider();
  }, 60000);
}

function fireCollider() {
  const input = document.getElementById("colliderInput").value.replace(/\s/g,"");
  if (!input) return log("❌ No collider input.");

  const symbols = input.split("+");
  let stabilitySum = 0;

  for (const s of symbols) {
    if (!owned.has(s)) return log(`❌ You do not own ${s}`);
    const el = ELEMENTS.find(e => e.symbol === s);
    stabilitySum += el.stability;
  }

  const avgStability = stabilitySum / symbols.length;
  const failChance = Math.max(5, 100 - avgStability);

  if (Math.random() * 100 < failChance) {
    log(`💥 Collider failure! Containment breached.`);
    return;
  }

  const name = "X-" + Math.floor(Math.random() * 9000 + 1000);
  const income = Math.floor(avgStability / 5) + 5;

  compounds.push({ name, income });
  recalc();

  log(`⚛️ New fictional element created: ${name}`);
}

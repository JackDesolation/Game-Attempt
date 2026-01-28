let colliderCharging=false;

function startColliderCharge(){
  if(!colliderBuilt) return log("❗ Collider not built");
  if(colliderCharging) return;
  colliderCharging=true;
  log("⚛️ Collider charging (60s)...");
  setTimeout(()=>{
    colliderCharging=false;
    fireCollider();
  },60000);
}

function fireCollider(){
  const input=document.getElementById("colliderInput").value.replace(/\s/g,"");
  const symbols=input.split("+");
  let stabilitySum=0;
  const elements=[];

  for(const s of symbols){
    const el=ELEMENTS.find(e=>e.symbol===s);
    if(!el || !owned.has(s)) return log("❌ Missing element "+s);
    elements.push(el);
    stabilitySum+=el.stability;
  }

  // Generate new fictional element
  const valence=Math.floor(Math.random()*8)+1;
  const Z=Math.max(...elements.map(e=>e.Z))+1;
  const symbol="X"+Z;
  const name=symbol;
  const stability=Math.floor(stabilitySum/elements.length);
  const newEl={Z,symbol,name,stability,valence,price:Z*50};
  ELEMENTS.push(newEl);
  owned.add(symbol);
  log(`⚛️ New fictional element created: ${symbol} (valence ${valence})`);

  // Auto-generate compounds from new element
  generateCompoundLibrary();
}

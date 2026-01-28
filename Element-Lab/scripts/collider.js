let colliderCharging=false;

function startColliderCharge(){
  if(colliderCharging) return;
  colliderCharging=true;
  log("⚛️ Collider charging...");

  setTimeout(()=>{
    colliderCharging=false;
    fireCollider();
  },60000);
}

function fireCollider(){
  const input=document.getElementById("colliderInput").value.replace(/\s/g,"");
  const parts=input.split("+");
  let stability=0;

  for(const p of parts){
    if(!owned.has(p)) return log("❌ Missing element "+p);
    stability+=ELEMENTS.find(e=>e.symbol===p).stability;
  }

  const avg=stability/parts.length;
  if(Math.random()*100 > avg){
    log("💥 Collider failure!");
    return;
  }

  const name="X-"+Math.floor(Math.random()*9999);
  compounds.push({name,income:Math.floor(avg/5)+5});
  recalc();
  log("⚛️ Fictional element created: "+name);
}

function log(msg){
  const l=document.getElementById("log");
  l.innerHTML+=msg+"<br>";
}

function submitReaction(){
  const eq=document.getElementById("equation").value.replace(/\s/g,"");
  const known=REACTIONS.find(r=>r.eq===eq);

  if(known){
    if(compounds.find(c=>c.name===known.name)) return;
    compounds.push({name:known.name,income:known.income});
    log("⚗️ Compound discovered: "+known.name);
  }else{
    const fakeName="Compound-"+Math.floor(Math.random()*9999);
    compounds.push({name:fakeName,income:1});
    log("🧪 Unknown compound synthesized: "+fakeName);
  }
  recalc();
}

function renderPT(){
  const p=document.getElementById("ptable");
  ELEMENTS.forEach(e=>{
    const d=document.createElement("div");
    d.className="element"+(owned.has(e.symbol)?" owned":"");
    d.innerHTML=`${e.symbol}<br>${e.Z}`;
    d.onclick=()=>{
      if(owned.has(e.symbol)) return;
      if(funds>=e.price){
        funds-=e.price;
        owned.add(e.symbol);
        log("🧬 Acquired "+e.name);
      }
    };
    p.appendChild(d);
  });
}

function update(){
  document.getElementById("funds").textContent=funds.toFixed(1);
  document.getElementById("fps").textContent=fps.toFixed(1);
  document.getElementById("compounds").innerHTML=
    compounds.map(c=>`<div class="compound">${c.name}</div>`).join("");
}

setInterval(update,100);
renderPT();
log("🧪 Lab initialized. Hydrogen unlocked.");

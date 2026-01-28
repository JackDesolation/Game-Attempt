function log(msg){
    const l=document.getElementById("log");
    l.innerHTML+=msg+"<br>";
}

function submitReaction(){
    const eq=document.getElementById("equation").value.replace(/\s/g,"");
    const r=REACTIONS.find(r=>r.eq===eq);
    if(!r) return log("❌ Reaction invalid.");
    if(compounds.find(c=>c.name===r.name)) return;
    compounds.push({name:r.name,income:r.income});
    recalc();
    log(`⚗️ Compound discovered: ${r.name}`);
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
                log(`🧬 Acquired ${e.name}`);
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
log("🧪 Lab started. Hydrogen available.");

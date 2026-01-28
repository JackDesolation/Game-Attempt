let funds = 0;
let fps = 0;
let owned = new Set(["H"]);
let compounds = [];
let colliderBuilt = true;

function recalc(){
  fps = compounds.reduce((a,c)=>a+c.income,0);
}

setInterval(()=>{
  funds += fps/10;
},100);

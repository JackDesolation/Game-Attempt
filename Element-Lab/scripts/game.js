let funds = 0;
let fps = 0;
let owned = new Set(["H"]);
let compounds = [];
let compoundLibrary = [];
let colliderBuilt = true;

function recalc(){
  fps = compounds.reduce((a,c)=>a+c.income,0);
}

setInterval(()=>{
  funds += fps/10;
},100);

// Auto-generate all possible valid compounds from owned elements
function generateCompoundLibrary(){
  compoundLibrary = [];
  const ownedArr = Array.from(owned).map(s=>ELEMENTS.find(e=>e.symbol===s));

  for(let i=0;i<ownedArr.length;i++){
    for(let j=i;j<ownedArr.length;j++){
      const a=ownedArr[i],b=ownedArr[j];
      if(a.valence==0 || b.valence==0) continue;
      // Simplified balancing: LCM of valences
      const lcm=(x,y)=>x*y/ gcd(x,y);
      const gcd=(x,y)=>!y?x:gcd(y,x%y);
      const countA=lcm(a.valence,b.valence)/a.valence;
      const countB=lcm(a.valence,b.valence)/b.valence;
      const formula=countA>1?a.symbol+countA:a.symbol;
      const formulaB=countB>1?b.symbol+countB:b.symbol;
      const name=formula+formulaB;
      const avgStability=(a.stability+b.stability)/2;
      const income=Math.floor((avgStability+(a.Z+b.Z))/10);
      compoundLibrary.push({name,ingredients:[a.symbol,b.symbol],income});
    }
  }
}

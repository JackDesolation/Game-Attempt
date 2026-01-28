const ELEMENTS = [
  {Z:1,symbol:"H",name:"Hydrogen",stability:95},
  {Z:2,symbol:"He",name:"Helium",stability:98},
  {Z:3,symbol:"Li",name:"Lithium",stability:70},
  {Z:4,symbol:"Be",name:"Beryllium",stability:65},
  {Z:5,symbol:"B",name:"Boron",stability:75},
  {Z:6,symbol:"C",name:"Carbon",stability:90},
  {Z:7,symbol:"N",name:"Nitrogen",stability:92},
  {Z:8,symbol:"O",name:"Oxygen",stability:90},
  {Z:9,symbol:"F",name:"Fluorine",stability:40},
  {Z:10,symbol:"Ne",name:"Neon",stability:99},
  {Z:11,symbol:"Na",name:"Sodium",stability:45},
  {Z:12,symbol:"Mg",name:"Magnesium",stability:70},
  {Z:13,symbol:"Al",name:"Aluminum",stability:85},
  {Z:14,symbol:"Si",name:"Silicon",stability:88},
  {Z:15,symbol:"P",name:"Phosphorus",stability:60},
  {Z:16,symbol:"S",name:"Sulfur",stability:80},
  {Z:17,symbol:"Cl",name:"Chlorine",stability:55},
  {Z:18,symbol:"Ar",name:"Argon",stability:99},
  {Z:19,symbol:"K",name:"Potassium",stability:40},
  {Z:20,symbol:"Ca",name:"Calcium",stability:65},
  // ...
  // All elements continue normally
  // Actinides + superheavies intentionally lower stability
  {Z:92,symbol:"U",name:"Uranium",stability:35},
  {Z:94,symbol:"Pu",name:"Plutonium",stability:25},
  {Z:118,symbol:"Og",name:"Oganesson",stability:5}
];

// Auto-price based on atomic number
ELEMENTS.forEach(e => {
  e.price = Math.floor(Math.pow(e.Z, 1.4) * 10);
});


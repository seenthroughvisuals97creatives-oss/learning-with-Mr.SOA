/* periodic-table-data.js
   Full 118-element layout, kept separate from the main page so the
   grid positions load fast -- the heavier per-element detail only
   matters once someone actually clicks a box.

   TO ADD A NEW ELEMENT TO THE CLASSROOM WALL:
   Find its atomicNumber below, set "active": true, and fill in
   memory / config / oxidation / commonIon / note. That's the whole
   process -- no other file needs to change.
*/
const PERIODIC_TABLE = [
  {
    "atomicNumber": 1,
    "symbol": "H",
    "name": "Hydrogen",
    "period": 1,
    "group": 1,
    "active": true,
    "memory": "Hi, I'm number one! — the first, the simplest, the one every other element is built up from.",
    "config": "1s¹",
    "oxidation": "+1, -1",
    "commonIon": "H⁺",
    "note": "The most abundant element in the universe. In class: the starting point for every reaction we balance."
  },
  {
    "atomicNumber": 2,
    "symbol": "He",
    "name": "Helium",
    "period": 1,
    "group": 18,
    "active": false
  },
  {
    "atomicNumber": 3,
    "symbol": "Li",
    "name": "Lithium",
    "period": 2,
    "group": 1,
    "active": false
  },
  {
    "atomicNumber": 4,
    "symbol": "Be",
    "name": "Beryllium",
    "period": 2,
    "group": 2,
    "active": false
  },
  {
    "atomicNumber": 5,
    "symbol": "B",
    "name": "Boron",
    "period": 2,
    "group": 13,
    "active": false
  },
  {
    "atomicNumber": 6,
    "symbol": "C",
    "name": "Carbon",
    "period": 2,
    "group": 14,
    "active": false
  },
  {
    "atomicNumber": 7,
    "symbol": "N",
    "name": "Nitrogen",
    "period": 2,
    "group": 15,
    "active": false
  },
  {
    "atomicNumber": 8,
    "symbol": "O",
    "name": "Oxygen",
    "period": 2,
    "group": 16,
    "active": false
  },
  {
    "atomicNumber": 9,
    "symbol": "F",
    "name": "Fluorine",
    "period": 2,
    "group": 17,
    "active": false
  },
  {
    "atomicNumber": 10,
    "symbol": "Ne",
    "name": "Neon",
    "period": 2,
    "group": 18,
    "active": false
  },
  {
    "atomicNumber": 11,
    "symbol": "Na",
    "name": "Sodium",
    "period": 3,
    "group": 1,
    "active": false
  },
  {
    "atomicNumber": 12,
    "symbol": "Mg",
    "name": "Magnesium",
    "period": 3,
    "group": 2,
    "active": false
  },
  {
    "atomicNumber": 13,
    "symbol": "Al",
    "name": "Aluminium",
    "period": 3,
    "group": 13,
    "active": false
  },
  {
    "atomicNumber": 14,
    "symbol": "Si",
    "name": "Silicon",
    "period": 3,
    "group": 14,
    "active": false
  },
  {
    "atomicNumber": 15,
    "symbol": "P",
    "name": "Phosphorus",
    "period": 3,
    "group": 15,
    "active": false
  },
  {
    "atomicNumber": 16,
    "symbol": "S",
    "name": "Sulfur",
    "period": 3,
    "group": 16,
    "active": false
  },
  {
    "atomicNumber": 17,
    "symbol": "Cl",
    "name": "Chlorine",
    "period": 3,
    "group": 17,
    "active": false
  },
  {
    "atomicNumber": 18,
    "symbol": "Ar",
    "name": "Argon",
    "period": 3,
    "group": 18,
    "active": false
  },
  {
    "atomicNumber": 19,
    "symbol": "K",
    "name": "Potassium",
    "period": 4,
    "group": 1,
    "active": false
  },
  {
    "atomicNumber": 20,
    "symbol": "Ca",
    "name": "Calcium",
    "period": 4,
    "group": 2,
    "active": false
  },
  {
    "atomicNumber": 21,
    "symbol": "Sc",
    "name": "Scandium",
    "period": 4,
    "group": 3,
    "active": false
  },
  {
    "atomicNumber": 22,
    "symbol": "Ti",
    "name": "Titanium",
    "period": 4,
    "group": 4,
    "active": false
  },
  {
    "atomicNumber": 23,
    "symbol": "V",
    "name": "Vanadium",
    "period": 4,
    "group": 5,
    "active": false
  },
  {
    "atomicNumber": 24,
    "symbol": "Cr",
    "name": "Chromium",
    "period": 4,
    "group": 6,
    "active": false
  },
  {
    "atomicNumber": 25,
    "symbol": "Mn",
    "name": "Manganese",
    "period": 4,
    "group": 7,
    "active": false
  },
  {
    "atomicNumber": 26,
    "symbol": "Fe",
    "name": "Iron",
    "period": 4,
    "group": 8,
    "active": true,
    "memory": "Mr. SOA's own memory pathway for Iron goes here.",
    "config": "[Ar] 3d⁶ 4s²",
    "oxidation": "+2, +3",
    "commonIon": "Fe²⁺ / Fe³⁺",
    "note": "The metal in your blood and in every nail in this room. Rusts because it reacts with oxygen — that orange dust is iron losing an argument with the air."
  },
  {
    "atomicNumber": 27,
    "symbol": "Co",
    "name": "Cobalt",
    "period": 4,
    "group": 9,
    "active": false
  },
  {
    "atomicNumber": 28,
    "symbol": "Ni",
    "name": "Nickel",
    "period": 4,
    "group": 10,
    "active": false
  },
  {
    "atomicNumber": 29,
    "symbol": "Cu",
    "name": "Copper",
    "period": 4,
    "group": 11,
    "active": false
  },
  {
    "atomicNumber": 30,
    "symbol": "Zn",
    "name": "Zinc",
    "period": 4,
    "group": 12,
    "active": false
  },
  {
    "atomicNumber": 31,
    "symbol": "Ga",
    "name": "Gallium",
    "period": 4,
    "group": 13,
    "active": false
  },
  {
    "atomicNumber": 32,
    "symbol": "Ge",
    "name": "Germanium",
    "period": 4,
    "group": 14,
    "active": false
  },
  {
    "atomicNumber": 33,
    "symbol": "As",
    "name": "Arsenic",
    "period": 4,
    "group": 15,
    "active": false
  },
  {
    "atomicNumber": 34,
    "symbol": "Se",
    "name": "Selenium",
    "period": 4,
    "group": 16,
    "active": false
  },
  {
    "atomicNumber": 35,
    "symbol": "Br",
    "name": "Bromine",
    "period": 4,
    "group": 17,
    "active": false
  },
  {
    "atomicNumber": 36,
    "symbol": "Kr",
    "name": "Krypton",
    "period": 4,
    "group": 18,
    "active": false
  },
  {
    "atomicNumber": 37,
    "symbol": "Rb",
    "name": "Rubidium",
    "period": 5,
    "group": 1,
    "active": false
  },
  {
    "atomicNumber": 38,
    "symbol": "Sr",
    "name": "Strontium",
    "period": 5,
    "group": 2,
    "active": false
  },
  {
    "atomicNumber": 39,
    "symbol": "Y",
    "name": "Yttrium",
    "period": 5,
    "group": 3,
    "active": false
  },
  {
    "atomicNumber": 40,
    "symbol": "Zr",
    "name": "Zirconium",
    "period": 5,
    "group": 4,
    "active": false
  },
  {
    "atomicNumber": 41,
    "symbol": "Nb",
    "name": "Niobium",
    "period": 5,
    "group": 5,
    "active": false
  },
  {
    "atomicNumber": 42,
    "symbol": "Mo",
    "name": "Molybdenum",
    "period": 5,
    "group": 6,
    "active": false
  },
  {
    "atomicNumber": 43,
    "symbol": "Tc",
    "name": "Technetium",
    "period": 5,
    "group": 7,
    "active": false
  },
  {
    "atomicNumber": 44,
    "symbol": "Ru",
    "name": "Ruthenium",
    "period": 5,
    "group": 8,
    "active": false
  },
  {
    "atomicNumber": 45,
    "symbol": "Rh",
    "name": "Rhodium",
    "period": 5,
    "group": 9,
    "active": false
  },
  {
    "atomicNumber": 46,
    "symbol": "Pd",
    "name": "Palladium",
    "period": 5,
    "group": 10,
    "active": false
  },
  {
    "atomicNumber": 47,
    "symbol": "Ag",
    "name": "Silver",
    "period": 5,
    "group": 11,
    "active": false
  },
  {
    "atomicNumber": 48,
    "symbol": "Cd",
    "name": "Cadmium",
    "period": 5,
    "group": 12,
    "active": false
  },
  {
    "atomicNumber": 49,
    "symbol": "In",
    "name": "Indium",
    "period": 5,
    "group": 13,
    "active": false
  },
  {
    "atomicNumber": 50,
    "symbol": "Sn",
    "name": "Tin",
    "period": 5,
    "group": 14,
    "active": false
  },
  {
    "atomicNumber": 51,
    "symbol": "Sb",
    "name": "Antimony",
    "period": 5,
    "group": 15,
    "active": false
  },
  {
    "atomicNumber": 52,
    "symbol": "Te",
    "name": "Tellurium",
    "period": 5,
    "group": 16,
    "active": false
  },
  {
    "atomicNumber": 53,
    "symbol": "I",
    "name": "Iodine",
    "period": 5,
    "group": 17,
    "active": false
  },
  {
    "atomicNumber": 54,
    "symbol": "Xe",
    "name": "Xenon",
    "period": 5,
    "group": 18,
    "active": false
  },
  {
    "atomicNumber": 55,
    "symbol": "Cs",
    "name": "Cesium",
    "period": 6,
    "group": 1,
    "active": false
  },
  {
    "atomicNumber": 56,
    "symbol": "Ba",
    "name": "Barium",
    "period": 6,
    "group": 2,
    "active": false
  },
  {
    "atomicNumber": 57,
    "symbol": "La",
    "name": "Lanthanum",
    "period": 6,
    "group": 3,
    "active": false
  },
  {
    "atomicNumber": 58,
    "symbol": "Ce",
    "name": "Cerium",
    "period": 8,
    "group": 4,
    "active": false
  },
  {
    "atomicNumber": 59,
    "symbol": "Pr",
    "name": "Praseodymium",
    "period": 8,
    "group": 5,
    "active": false
  },
  {
    "atomicNumber": 60,
    "symbol": "Nd",
    "name": "Neodymium",
    "period": 8,
    "group": 6,
    "active": false
  },
  {
    "atomicNumber": 61,
    "symbol": "Pm",
    "name": "Promethium",
    "period": 8,
    "group": 7,
    "active": false
  },
  {
    "atomicNumber": 62,
    "symbol": "Sm",
    "name": "Samarium",
    "period": 8,
    "group": 8,
    "active": false
  },
  {
    "atomicNumber": 63,
    "symbol": "Eu",
    "name": "Europium",
    "period": 8,
    "group": 9,
    "active": false
  },
  {
    "atomicNumber": 64,
    "symbol": "Gd",
    "name": "Gadolinium",
    "period": 8,
    "group": 10,
    "active": false
  },
  {
    "atomicNumber": 65,
    "symbol": "Tb",
    "name": "Terbium",
    "period": 8,
    "group": 11,
    "active": false
  },
  {
    "atomicNumber": 66,
    "symbol": "Dy",
    "name": "Dysprosium",
    "period": 8,
    "group": 12,
    "active": false
  },
  {
    "atomicNumber": 67,
    "symbol": "Ho",
    "name": "Holmium",
    "period": 8,
    "group": 13,
    "active": false
  },
  {
    "atomicNumber": 68,
    "symbol": "Er",
    "name": "Erbium",
    "period": 8,
    "group": 14,
    "active": false
  },
  {
    "atomicNumber": 69,
    "symbol": "Tm",
    "name": "Thulium",
    "period": 8,
    "group": 15,
    "active": false
  },
  {
    "atomicNumber": 70,
    "symbol": "Yb",
    "name": "Ytterbium",
    "period": 8,
    "group": 16,
    "active": false
  },
  {
    "atomicNumber": 71,
    "symbol": "Lu",
    "name": "Lutetium",
    "period": 8,
    "group": 17,
    "active": false
  },
  {
    "atomicNumber": 72,
    "symbol": "Hf",
    "name": "Hafnium",
    "period": 6,
    "group": 4,
    "active": false
  },
  {
    "atomicNumber": 73,
    "symbol": "Ta",
    "name": "Tantalum",
    "period": 6,
    "group": 5,
    "active": false
  },
  {
    "atomicNumber": 74,
    "symbol": "W",
    "name": "Tungsten",
    "period": 6,
    "group": 6,
    "active": false
  },
  {
    "atomicNumber": 75,
    "symbol": "Re",
    "name": "Rhenium",
    "period": 6,
    "group": 7,
    "active": false
  },
  {
    "atomicNumber": 76,
    "symbol": "Os",
    "name": "Osmium",
    "period": 6,
    "group": 8,
    "active": false
  },
  {
    "atomicNumber": 77,
    "symbol": "Ir",
    "name": "Iridium",
    "period": 6,
    "group": 9,
    "active": false
  },
  {
    "atomicNumber": 78,
    "symbol": "Pt",
    "name": "Platinum",
    "period": 6,
    "group": 10,
    "active": false
  },
  {
    "atomicNumber": 79,
    "symbol": "Au",
    "name": "Gold",
    "period": 6,
    "group": 11,
    "active": false
  },
  {
    "atomicNumber": 80,
    "symbol": "Hg",
    "name": "Mercury",
    "period": 6,
    "group": 12,
    "active": false
  },
  {
    "atomicNumber": 81,
    "symbol": "Tl",
    "name": "Thallium",
    "period": 6,
    "group": 13,
    "active": false
  },
  {
    "atomicNumber": 82,
    "symbol": "Pb",
    "name": "Lead",
    "period": 6,
    "group": 14,
    "active": false
  },
  {
    "atomicNumber": 83,
    "symbol": "Bi",
    "name": "Bismuth",
    "period": 6,
    "group": 15,
    "active": false
  },
  {
    "atomicNumber": 84,
    "symbol": "Po",
    "name": "Polonium",
    "period": 6,
    "group": 16,
    "active": false
  },
  {
    "atomicNumber": 85,
    "symbol": "At",
    "name": "Astatine",
    "period": 6,
    "group": 17,
    "active": false
  },
  {
    "atomicNumber": 86,
    "symbol": "Rn",
    "name": "Radon",
    "period": 6,
    "group": 18,
    "active": false
  },
  {
    "atomicNumber": 87,
    "symbol": "Fr",
    "name": "Francium",
    "period": 7,
    "group": 1,
    "active": false
  },
  {
    "atomicNumber": 88,
    "symbol": "Ra",
    "name": "Radium",
    "period": 7,
    "group": 2,
    "active": false
  },
  {
    "atomicNumber": 89,
    "symbol": "Ac",
    "name": "Actinium",
    "period": 7,
    "group": 3,
    "active": false
  },
  {
    "atomicNumber": 90,
    "symbol": "Th",
    "name": "Thorium",
    "period": 9,
    "group": 4,
    "active": false
  },
  {
    "atomicNumber": 91,
    "symbol": "Pa",
    "name": "Protactinium",
    "period": 9,
    "group": 5,
    "active": false
  },
  {
    "atomicNumber": 92,
    "symbol": "U",
    "name": "Uranium",
    "period": 9,
    "group": 6,
    "active": false
  },
  {
    "atomicNumber": 93,
    "symbol": "Np",
    "name": "Neptunium",
    "period": 9,
    "group": 7,
    "active": false
  },
  {
    "atomicNumber": 94,
    "symbol": "Pu",
    "name": "Plutonium",
    "period": 9,
    "group": 8,
    "active": false
  },
  {
    "atomicNumber": 95,
    "symbol": "Am",
    "name": "Americium",
    "period": 9,
    "group": 9,
    "active": false
  },
  {
    "atomicNumber": 96,
    "symbol": "Cm",
    "name": "Curium",
    "period": 9,
    "group": 10,
    "active": false
  },
  {
    "atomicNumber": 97,
    "symbol": "Bk",
    "name": "Berkelium",
    "period": 9,
    "group": 11,
    "active": false
  },
  {
    "atomicNumber": 98,
    "symbol": "Cf",
    "name": "Californium",
    "period": 9,
    "group": 12,
    "active": false
  },
  {
    "atomicNumber": 99,
    "symbol": "Es",
    "name": "Einsteinium",
    "period": 9,
    "group": 13,
    "active": false
  },
  {
    "atomicNumber": 100,
    "symbol": "Fm",
    "name": "Fermium",
    "period": 9,
    "group": 14,
    "active": false
  },
  {
    "atomicNumber": 101,
    "symbol": "Md",
    "name": "Mendelevium",
    "period": 9,
    "group": 15,
    "active": false
  },
  {
    "atomicNumber": 102,
    "symbol": "No",
    "name": "Nobelium",
    "period": 9,
    "group": 16,
    "active": false
  },
  {
    "atomicNumber": 103,
    "symbol": "Lr",
    "name": "Lawrencium",
    "period": 9,
    "group": 17,
    "active": false
  },
  {
    "atomicNumber": 104,
    "symbol": "Rf",
    "name": "Rutherfordium",
    "period": 7,
    "group": 4,
    "active": false
  },
  {
    "atomicNumber": 105,
    "symbol": "Db",
    "name": "Dubnium",
    "period": 7,
    "group": 5,
    "active": false
  },
  {
    "atomicNumber": 106,
    "symbol": "Sg",
    "name": "Seaborgium",
    "period": 7,
    "group": 6,
    "active": false
  },
  {
    "atomicNumber": 107,
    "symbol": "Bh",
    "name": "Bohrium",
    "period": 7,
    "group": 7,
    "active": false
  },
  {
    "atomicNumber": 108,
    "symbol": "Hs",
    "name": "Hassium",
    "period": 7,
    "group": 8,
    "active": false
  },
  {
    "atomicNumber": 109,
    "symbol": "Mt",
    "name": "Meitnerium",
    "period": 7,
    "group": 9,
    "active": false
  },
  {
    "atomicNumber": 110,
    "symbol": "Ds",
    "name": "Darmstadtium",
    "period": 7,
    "group": 10,
    "active": false
  },
  {
    "atomicNumber": 111,
    "symbol": "Rg",
    "name": "Roentgenium",
    "period": 7,
    "group": 11,
    "active": false
  },
  {
    "atomicNumber": 112,
    "symbol": "Cn",
    "name": "Copernicium",
    "period": 7,
    "group": 12,
    "active": false
  },
  {
    "atomicNumber": 113,
    "symbol": "Nh",
    "name": "Nihonium",
    "period": 7,
    "group": 13,
    "active": false
  },
  {
    "atomicNumber": 114,
    "symbol": "Fl",
    "name": "Flerovium",
    "period": 7,
    "group": 14,
    "active": false
  },
  {
    "atomicNumber": 115,
    "symbol": "Mc",
    "name": "Moscovium",
    "period": 7,
    "group": 15,
    "active": false
  },
  {
    "atomicNumber": 116,
    "symbol": "Lv",
    "name": "Livermorium",
    "period": 7,
    "group": 16,
    "active": false
  },
  {
    "atomicNumber": 117,
    "symbol": "Ts",
    "name": "Tennessine",
    "period": 7,
    "group": 17,
    "active": false
  },
  {
    "atomicNumber": 118,
    "symbol": "Og",
    "name": "Oganesson",
    "period": 7,
    "group": 18,
    "active": false
  }
];

// data.js
export const frituraOptions = [
  { name: "Ruffles" },
  { name: "Takis" },
  { name: "Cheetos Flamin' Hot" },
  { name: "Doritos" },
];

export const papitasOptions = [
  { name: "Ruffles" },
  { name: "Takis" },
  { name: "Cheetos Flamin' Hot" },
  { name: "Doritos" },
  { name: "Sabritas Amarillas" },
];

export const papaslocasOptions = [
  { name: "Naturales" },
  { name: "Queso" },
  { name: "Chipotle" },
  { name: "Adobadas" },
];

export const maruchanOptions = [
  { name: "Habanero" },
  { name: "Piquin" },
  { name: "Pollo" },
  { name: "Camaron" },
  { name: "Res" },
];

export const carneOptions = [
  { name: "Suadero" },
  { name: "Pastor" },
  { name: "Mixto" },
];

export const verduraOptions = [{ name: "Cebolla" }, { name: "Cilantro" }];

export const extrasOptions = [
  { name: "Volcano", price: 10.0 },
  { name: "Porción de pastor", price: 25.0 },
  { name: "Porción de suadero", price: 25.0 },
  { name: "Papa cambray", price: 20.0 },
  { name: "Cobertura de Doritos", price: 10.0 },
  { name: "Cobertura de Ruffles", price: 10.0 },
  { name: "Cobertura de Chetos Flamin", price: 10.0 },
  { name: "Cobertura de Takis", price: 10.0 },
];

export const saborPreparadas = [
  {
    name: "Ameyal",
    description:
      "Escarchado de chamoy rosa y miguelito, fresas naturales y cereza",
  },
  {
    name: "Sangria preparada",
    description: "Limón, sal, tajín, escarchado de chamoy y miguelito",
  },
  {
    name: "Squirt Preparado",
    description: "Limón, sal, escarchado de chamoy y miguelito",
  },
  {
    name: "Agua Mineral Preparada",
    description: "Limón, sal, escarchado de chamoy y miguelito",
  },
];

export const saborArizonaLoco = [
  {
    name: "Arizona Mango",
    description:
      "Escarchado de chamoy con miguelito, mango, cacahuates, gomitas y dulces de tamarindo",
  },
  {
    name: "Arizona Fresa",
    description:
      "Escarchado de chamoy con miguelito, fresa, cacahuates, gomitas y dulces de tamarindo",
  },
];

export const saborArizona = [
  { name: "Mango" },
  { name: "Kiwi-Fresa" },
  { name: "Sandía" },
  { name: "Té Verde" },
];

export const saborBoings = [
  { name: "Manzana" },
  { name: "Mango" },
  { name: "Uva" },
  { name: "Fresa" },
];

export const products = {
  todos: {
    elotes: [
      {
        id: 1,
        title: "Elote Natural",
        description: "Elote tradicional preparado con sal y limón.",
        price: 30.0,
        image: "../img/elote-natural.PNG",
        options: [{ name: "Extras", options: extrasOptions }],
      },
      {
        id: 2,
        title: "Elote Clásico",
        description:
          "Elote tradicional preparado con mantequilla, mayonesa y queso rallado.",
        price: 35.0,
        image: "../img/elote-clasico.PNG",
        options: [{ name: "Extras", options: extrasOptions }],
      },
      {
        id: 3,
        title: "Elote Loco",
        description:
          "Elote preparado con mantequilla, mayonesa y cobertura de fritura a elegir: doritos nacho, takis fuego, ruffles queso o cheetos flamin' hot",
        price: 45.0,
        image: "../img/elote-loco.PNG",
        options: [
          { name: "Cubierta fritura", options: frituraOptions },
          { name: "Extras", options: extrasOptions },
        ],
      },
      {
        id: 4,
        title: "Papalote",
        description:
          "Elote Loco acompañado de una camita de papas Sabritas a elegir.",
        price: 60.0,
        image: "../img/papalote.PNG",
        options: [
          { name: "Cubierta fritura", options: frituraOptions },
          { name: "Bolsa papitas", options: papitasOptions },
          { name: "Extras", options: extrasOptions },
        ],
      },
      {
        id: 5,
        title: "Charola Eloteco Clásico",
        description:
          "Charola con un elote y esquite clásicos acompañados de papas Sabritas a elegir.",
        price: 80.0,
        image: "../img/charola-eloteco.png",
        options: [
          { name: "Bolsa papitas", options: papitasOptions },
          { name: "Extras", options: extrasOptions },
        ],
      },
      {
        id: 6,
        title: "Charola Eloteco Loco",
        description:
          "Charola con un elote y esquite loco acompañados de papas Sabritas a elegir.",
        price: 90.0,
        image: "../img/charola-eloteco-loco.PNG",
        options: [
          { name: "Cubierta fritura", options: frituraOptions },
          { name: "Bolsa papitas", options: papitasOptions },
          { name: "Extras", options: extrasOptions },
        ],
      },
    ],
    esquites: [
      {
        id: 7,
        title: "Doriesquite",
        description:
          "Doritos a elegir preparados con esquite, limón, sal, mayonesa y queso rallado.",
        price: 55.0,
        image: "../img/dori-esquite.PNG",
        options: [{ name: "Extras", options: extrasOptions }],
      },
      {
        id: 8,
        title: "Tostiesquite",
        description:
          "Tostitos a elegir preparados con esquite, limón, sal, mayonesa y queso rallado.",
        price: 55.0,
        image: "../img/tosti-esquite.PNG",
        options: [{ name: "Extras", options: extrasOptions }],
      },
      {
        id: 9,
        title: "Esquite Natural",
        description: "Esquite preparado con sal y limón.",
        sizes: [
          { size: "Chico", price: 30.0 },
          { size: "Grande", price: 55.0 },
        ],
        image: "../img/esquite-natural.PNG",
        options: [{ name: "Extras", options: extrasOptions }],
      },
      {
        id: 10,
        title: "Esquite Clásico",
        description:
          "Esquite preparado con sal y limón, mayonesa y queso rallado.",
        sizes: [
          { size: "Chico", price: 35.0 },
          { size: "Grande", price: 55.0 },
        ],
        image: "../img/esquite-clasico.PNG",
        options: [{ name: "Extras", options: extrasOptions }],
      },
      {
        id: 11,
        title: "Esquite Loco",
        description:
          "Esquite preparado con sal y limón, mayonesa, queso y cobertura de fritura: doritos nacho, takis fuego, ruffles queso o cheetos flamin' hot.",
        sizes: [
          { size: "Chico", price: 40.0 },
          { size: "Grande", price: 65.0 },
        ],
        image: "../img/esquite-loco.PNG",
        options: [
          { name: "Cubierta fritura", options: frituraOptions },
          { name: "Extras", options: extrasOptions },
        ],
      },
      {
        id: 12,
        title: "Papa Esquite",
        description:
          "Esquite Loco acompañado de una camita de papas Sabritas a elegir.",
        sizes: [
          { size: "Chico", price: 55.0 },
          { size: "Grande", price: 75.0 },
        ],
        image: "../img/papa-esquite.PNG",
        options: [
          { name: "Cubierta fritura", options: frituraOptions },
          { name: "Bolsa papitas", options: papitasOptions },
          { name: "Extras", options: extrasOptions },
        ],
      },
      {
        id: 13,
        title: "Papa Esquite Volcano",
        description:
          "Papa esquite bañado en queso amarillo líquido calientito.",
        sizes: [
          { size: "Chico", price: 65.0 },
          { size: "Grande", price: 85.0 },
        ],
        image: "../img/papa-esquite-volcano.PNG",
        options: [
          { name: "Cubierta fritura", options: frituraOptions },
          { name: "Bolsa papitas", options: papitasOptions },
          { name: "Extras", options: extrasOptions },
        ],
      },
      {
        id: 14,
        title: "Esquite Suadero o Pastor",
        description:
          "Esquite preparado con carne al pastor, suadero o mixto y verdura encima.",
        sizes: [
          { size: "Chico", price: 55.0 },
          { size: "Grande", price: 80.0 },
        ],
        image: "../img/esquite-pastor-suadero.PNG",
        options: [
          { name: "Carne", options: carneOptions },
          { name: "Verdura", options: verduraOptions },
          { name: "Extras", options: extrasOptions },
        ],
      },
      {
        id: 15,
        title: "Esquites Cambray",
        description:
          "Esquite clásico acompañado con papas cambray preparadas con especias al horno.",
        sizes: [
          { size: "Chico", price: 50.0 },
          { size: "Grande", price: 70.0 },
        ],
        image: "../img/esquite-cambray.PNG",
        options: [
          { name: "Verdura", options: verduraOptions },
          { name: "Extras", options: extrasOptions },
        ],
      },
    ],
    maruchan: [
      {
        id: 16,
        title: "Maruchan Clásica",
        description:
          "Maruchan preparada con esquite, limón, sal, mayonesa y queso rallado.",
        price: 60.0,
        image: "../img/maruchan-clasica.png",
        options: [
          { name: "Sopa sabor", options: maruchanOptions },
          { name: "Extras", options: extrasOptions },
        ],
      },
      {
        id: 19,
        title: "Maruchan esquite y fritura",
        description:
          "Maruchan-esquite con cobertura de fritura a elegir: Cheeto Flamin, Doritos, Takis o Ruffles.",
        price: 70.0,
        image: "../img/maruchan-loca.png",
        options: [
          { name: "Cubierta fritura", options: frituraOptions },
          { name: "Sopa sabor", options: maruchanOptions },
          { name: "Extras", options: extrasOptions },
        ],
      },
      {
        id: 20,
        title: "Esquisopa loca",
        description:
          "Maruchan-esquite, fritura y una bolsa de papas Sabritas a elegir.",
        price: 80.0,
        image: "../img/esquisopa-loca.png",
        options: [
          { name: "Cubierta fritura", options: frituraOptions },
          { name: "Bolsa papitas", options: papitasOptions },
          { name: "Sopa sabor", options: maruchanOptions },
          { name: "Extras", options: extrasOptions },
        ],
      },
      {
        id: 21,
        title: "Maruchan Suadero o Pastor",
        description:
          "Maruchan-esquite con una porción de suadero, pastor o mixto y verdura encima.",
        price: 80.0,
        image: "../img/maruchan-suadero-pastor.png",
        options: [
          { name: "Sopa sabor", options: maruchanOptions },
          { name: "Carne", options: carneOptions },
          { name: "Verdura", options: verduraOptions },
          { name: "Extras", options: extrasOptions },
        ],
      },
    ],
    snacks: [
      {
        id: 22,
        title: "Papas Locas",
        description:
          "Papas de hojuela estilo C&A (100 gramos), sabor a escoger: naturales, adobadas, queso o chipotle; preparadas con limón, sal, salsa maggi, salsa inglesa y queso amarillo derretido calientito, agrega gomitas y cacahuates sin costo.",
        price: 55.0,
        image: "../img/papas-locas.PNG",
        options: [{ name: "Papa", options: papaslocasOptions }],
      },
      {
        id: 23,
        title: "Nachos sencillos",
        description:
          "Charola de nachos acompañado de chiles jalapeño y queso derretido líquido calientito.",
        price: 50.0,
        image: "../img/nachos-sencillos.PNG",
        options: [],
      },
      {
        id: 24,
        title: "Nachos con suadero o pastor",
        description:
          "Charola de nachos acompañado de chiles jalapeño, queso líquido derretido calientito y una porción de carne al pastor, suadero o mixto encima.",
        price: 70.0,
        image: "../img/nachos-carne.PNG",
        options: [
          { name: "Carne", options: carneOptions },
          { name: "Verdura", options: verduraOptions },
          { name: "Extras", options: extrasOptions },
        ],
      },
    ],
    drinks: [
      {
        id: 25,
        title: "Vaso Preparado",
        description: "Vaso escarchado con polvo picoso 500ml.",
        price: 45.0,
        image: "../img/vaso-preparado.png",
        options: [{ name: "Sabor", options: saborPreparadas }],
      },
      {
        id: 26,
        title: "Arizona Loco",
        description:
          "Escarchado de chamoy con miguelito, mango o fresa, cacahuates, gomitas y dulces de tamarindo. 680ml.",
        price: 70.0,
        image: "../img/arizona-loco.png",
        options: [
          { name: "Sabor", options: saborArizonaLoco },
          { name: "Sabor", options: saborArizona },
        ],
      },
      {
        id: 27,
        title: "Clamateco",
        description:
          "Escarchado de chamoy, clamato preparado con limón, sal, salsa maggi, salsa inglesa y banderilla de tamarindo. 500ml. ",
        price: 50.0,
        image: "../img/clamateco.PNG",
        options: [],
      },
      {
        id: 28,
        title: "Coca Cola",
        description: "600ml.",
        price: 25.0,
        image: "../img/coca-cola.png",
        options: [],
      },
      {
        id: 29,
        title: "Arizona",
        description: "Mango, Kiwi-Fresa, Sandía, Té Verde. 680ml.",
        price: 25.0,
        image: "../img/arizona.png",
        options: [{ name: "Sabor", options: saborArizona }],
      },
      {
        id: 30,
        title: "Boing",
        description: "Mango, Fresa, Manzana, Uva. 500ml.",
        price: 20.0,
        image: "../img/boing.png",
        options: [{ name: "Sabor", options: saborBoings }],
      },
    ],
  },
};

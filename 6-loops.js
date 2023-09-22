const fruits = [
  "apple",
  "banana",
  "orange",
  "manggis",
  "mango",
  "grape",
  "duren",
  "mengkudu",
  "matoa",
];

const rentalMobil = [
  {
    merk: "Toyota",
    model: "Yaris",
    tahun: 2005,
    garasi: false,
  },
  {
    merk: "Toyota",
    model: "Avanza",
    tahun: 2015,
    garasi: false,
  },
  {
    merk: "Toyota",
    model: "Agya",
    tahun: 2022,
    garasi: true,
  },
];

function sapaBuah(namaBuah) {
  console.log("Halo " + namaBuah);
}

for (let index = 0; index < fruits.length; index += 1) {
  sapaBuah(fruits[index]);
}

let counter = 0;

while (counter < 100) {
  counter++;
  console.log(counter);
}

for (let i = 0; i < 100; i++) {
  console.log(i);
}

console.log(counter);

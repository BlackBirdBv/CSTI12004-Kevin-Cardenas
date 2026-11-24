const catalogo = [
  { nombre: "Cocina de la casa · Inicial", precio: 68000 },
  { nombre: "Cocina de la casa · Intermedio", precio: 72000 },
  { nombre: "Panadería · Masa madre", precio: 95000 },
  { nombre: "Panadería · Pan de campo", precio: 70000 },
  { nombre: "Panadería · Bollería", precio: 88000 },
  { nombre: "Repostería · Tartas", precio: 82000 },
  { nombre: "Repostería · Decoración", precio: 58000 }
];

let suma = 0;
let caros = 0;
let promedio = 0;
let masCaro = 0;


for (const cat of catalogo) {
  console.log(`${cat.nombre}: ¢${cat.precio.toLocaleString("es-CR")}`);

  promedio = promedio + cat.precio;

  if (cat.precio > 80000) caros++;

  if (cat.precio > masCaro.precio) masCaro = cat;

  suma++;
}

console.log(`Talleres: ${suma}`);
console.log(`Promedio: ¢${Math.round(promedio = promedio / suma).toLocaleString("es-CR")}`);
console.log(`Más de ¢80 000: ${caros}`);
console.log(`El más caro: ${masCaro}`);



// Ejercicio 1 · Catálogo de talleres → casa-tomillo/js/catalogo.js/
const catalogo = [
  { nombre: "Cocina de la casa · Inicial", precio: 68000 },
  { nombre: "Cocina de la casa · Intermedio", precio: 72000 },
  { nombre: "Panadería · Masa madre", precio: 95000 },
  { nombre: "Panadería · Pan de campo", precio: 70000 },
  { nombre: "Panadería · Bollería", precio: 88000 },
  { nombre: "Repostería · Tartas", precio: 82000 },
  { nombre: "Repostería · Decoración", precio: 58000 }
];

//variables inicializadas
let suma = 0;
let caros = 0;
let promedio = 0;
let masCaro = catalogo[0];

//ciclo de recorrido de catalogo
for (const cat of catalogo) {
  //muestra los arreglo en la consola
  console.log(`${cat.nombre}: ¢${cat.precio.toLocaleString("es-CR")}`);
  //acumula el precio del catalogo
  promedio = promedio + cat.precio;

  //revisa cuales pasanron de ¢80 000
  if (cat.precio > 80000) caros++;
  //revisa y guarda cual es el mas caro
  if (cat.precio > masCaro.precio) masCaro = cat;

  //cuenta el contenido del catalogo
  suma++;
}

//muestra resumen en consolaSSS
console.log(`Talleres: ${suma}`);
console.log(`Promedio: ¢${Math.round(promedio = promedio / suma).toLocaleString("es-CR")}`);
console.log(`Más de ¢80 000: ${caros}`);
console.log(`El más caro: ${masCaro.nombre}`);



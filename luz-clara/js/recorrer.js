// recorrer.js - Recorrer un vector con for y con for...of
const precios = [45000, 75000, 38000];      // tarifas de Luz Clara
let total = 0;                              // acumulador
for (let i = 0; i < precios.length; i++) {  // índices 0, 1 y 2
  total += precios[i];                      // suma cada precio
}
console.log("Total:", total);
for (const precio of precios) {             // cada elemento, sin índice
  console.log("Precio:", precio);
}
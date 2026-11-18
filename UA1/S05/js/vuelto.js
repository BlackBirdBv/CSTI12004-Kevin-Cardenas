//Ejercicio 2 · Vuelto de un pago

//Variables y constantes
const totalPersona = 105000;

//Entradas
let cantidad = parseFloat(prompt("Cantidad de deposito:"));
let personas = parseInt(prompt("Cantidad de personas:"));

//Operaciones
let pago = totalPersona * personas;
let vuelto = (cantidad - pago).toFixed(2);

//Salida
console.log(`Personas: ${personas}`);
console.log(`A pagar: ${pago}`);
console.log(`Pagó: ${cantidad}`);
console.log(`Vuelto: ${vuelto}`);
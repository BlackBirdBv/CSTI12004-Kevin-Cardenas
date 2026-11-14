// Ejercicio 2 · Presupuesto con prompt
//precio por persona
const precioPers = 105000;

//datos de entrada 
let nombre = prompt("Escriba su nombre: ");
let personas = Number(prompt("Personas: "));

//calculo de total 
let total = precioPers * personas;  //105000 * 3 = 315000

console.log("Hola: " + nombre);
console.log("Personas: " + personas);
console.log("Total: " + total);
console.log("¿Es grupo (3 o más)? " + (personas >= 3));

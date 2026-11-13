// Ejercicio 1 · Inscripción a un taller → casatomillo/js/inscripcion.js
//constantes y variables definidas
const nombreTaller = "Panadería: masa madre";
const precioTaller = 95000;
const matriculaPersona = 10000;
const personasIncrip = 2;
let cuposGrupo = 8;

//Calculo del precio por persona 
let precioPersona = precioTaller + matriculaPersona;  //95000 + 10000 = 105000
let total = precioPersona * personasIncrip;           //105000 x 2 = 210000
cuposGrupo -= personasIncrip;                         //8 - 2 = 6

const hayCupos = cuposGrupo > 0;                      //6 > 0 = verdadero

//Salidas de informacion 
console.log("Taller: " + nombreTaller);
console.log("Precio por persona: " + precioPersona);
console.log("Total para 2 personas: " + total);
console.log("Cupos libres: " + cuposGrupo);
console.log("¿Hay cupos? " + hayCupos);
console.log("¿Menos de ₡250 000 y con cupos? " + (total < 250000 && hayCupos));
console.log("\n");

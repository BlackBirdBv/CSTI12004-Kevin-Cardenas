//Ejercicio 1 · Plan de pago → casa-tomillo/js/pago.js
//formato nombre
let nombrePagoJs = "  panadería: masa madre ";
nombrePagoJs = nombrePagoJs.trim();
nombrePagoJs = nombrePagoJs.toLocaleUpperCase();
//Salida
console.log("Taller: " + nombrePagoJs);

//formato fecha
const fechaPagoJs = new Date(2026,10,21);
//Salida
console.log("Inicia: " + fechaPagoJs.toLocaleDateString("es-CR",{dateStyle: "full"}));

//formato total 
let totalPagoJs = 105000;
const opciones = {style: "currency", currency: "CRC"};
const colones =  new Intl.NumberFormat("es-CR", opciones);
//Salidas
console.log("Total: ", colones.format(totalPagoJs));

//Cuotas
const cuotas = 4;

console.log(`${cuotas} cuotas de ${colones.format(totalPagoJs / cuotas)}`);
console.log("¿Cuota exacta? ",Number.isInteger(totalPagoJs / cuotas));
console.log(`Con ${cuotas-1} cuotas: ${colones.format(totalPagoJs / (cuotas-1))} cada una`);





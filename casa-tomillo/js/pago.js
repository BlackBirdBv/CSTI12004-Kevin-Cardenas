//Ejercicio 1 · Plan de pago → casa-tomillo/js/pago.js
//Variables y contantes
let nombrePagoJs = "  panadería: masa madre ";  //Taller
let totalPagoJs = 105000;                       //total a pagar
const fechaPagoJs = new Date(2026,10,21);       //fecha con formato
const cuotas = 4;                               //Cuotas

//FORMATOS:
//De: nombre
nombrePagoJs = nombrePagoJs.trim();
nombrePagoJs = nombrePagoJs.toLocaleUpperCase();

//De: moneda nacional 
const opciones = {style: "currency", currency: "CRC"};
const colones =  new Intl.NumberFormat("es-CR", opciones);

//Salidas
console.log(`Taller: ${nombrePagoJs}`);
console.log(`Inicia: ${fechaPagoJs.toLocaleDateString("es-CR",{dateStyle: "full"})}`);
console.log(`Total: ${colones.format(totalPagoJs)}`);
console.log(`${cuotas} cuotas de ${colones.format(totalPagoJs / cuotas)}`);
console.log(`¿Cuota exacta? ${Number.isInteger(totalPagoJs / cuotas)}`);
console.log(`Con ${cuotas-1} cuotas: ${colones.format(totalPagoJs / (cuotas-1))} cada una`);

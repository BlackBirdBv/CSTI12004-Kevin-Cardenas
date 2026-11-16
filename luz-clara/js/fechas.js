// fechas.js - Fechas con Date
const hoy = new Date ();                      //fecha y hora de ahora
console.log(hoy.getFullYear());              //año = 2026
console.log(hoy.getMonth() + 1);              //mes:empieza = 10 + 1: 11
console.log(hoy.getDate());                   //dia del mes = 16
console.log(hoy.toLocaleDateString("es-CR")); //formato de Costa Rica = 16/11/2026
const sesion = new Date(2026, 11, 5);        // 5 de diciembre (mes 11)
console.log(sesion.toLocaleDateString("es-CR",{ dateStyle: "full" }));
console.log("\n");
//Ejercicio 1 · Estado de los cupos
//constantes
const nivel = "Inicial";
const cupos = 6;
//condicional
if (cupos == 0) {
  console.error("Taller lleno");
} else if (cupos <= 2) {
  console.warn("¡Últimos cupos!");
} else {
  console.log("Hay cupos disponibles");
}
//ternario
console.log(cupos === 1 ? `Queda 1 cupo` : `Quedan ${cupos} cupos`);
//switch
switch (nivel) {
  case "Inicial":
    console.log("No necesita experiencia");
    break;
  case "Intermedio":
    console.log("Requiere el nivel inicial");
    break;
  default:
    console.log("Consulte con la escuela");
    break;
}
console.log("\n");

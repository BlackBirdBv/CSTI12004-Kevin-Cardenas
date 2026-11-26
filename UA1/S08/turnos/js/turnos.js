// Ejercicio 3 · Turnos con closure
//funcion para crear turnos
function crearTurnos(taller){
  // contador inicializado
  let numero = 0;
  // returno
  return () => { 
    numero += 1;
    return `${taller} · turno ${numero}`;
  };
}
//crea entornos separados
const turnoPan = crearTurnos("Panadería");
const turnoTarta = crearTurnos("Tartas");

//llama las funciones
console.log(turnoPan()); 
console.log(turnoPan()); 
console.log(turnoTarta());    
console.log(turnoPan());

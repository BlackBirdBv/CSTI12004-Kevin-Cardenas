// Ejercicio 3 · Grupos de inscripción
//declaracion de variables
let cupos = 8;
let ronda = 0;
let personas;

//se ejecuta mientras existan cupos
while (cupos > 0) {
  //contador de rondas
  ronda++;
  //validad si los hay 3 o mas cupos
  if (cupos > 2) {
    personas = 3;
    cupos -= personas;
  //si hay menos de 3 cupos resta los que existan 
  } else {
    personas = cupos;
    cupos -= personas;
  }
  //muestra en consola
  console.log(`Ronda ${ronda}: ${personas} personas . quedan ${cupos}`);  
}
//muesta al finalizar 
console.log("Taller lleno");

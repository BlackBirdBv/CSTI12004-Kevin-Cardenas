// Ejercicio 1 · Del ciclo al callback 
//listar
console.log("— Con ciclos —");
cursos.forEach((c, i) => {
  console.log(`${i + 1}. ${c.nombre}`);
});
//tranformar
const conMatricula2 = cursos.map((c) => c.precio +10000)
console.log(`Con matricula:  ${conMatricula2.join(", ")}`);
//filtrar
const iniciales2 = cursos.filter((c) => c.nivel === "Inicial").map((c) => c.nombre);
console.log(`Inicial: ${iniciales2.join(", ")}`);

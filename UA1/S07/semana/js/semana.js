//Ejercicio 2 · Semana de talleres → UA1/S07/semana/
//matriz declarada
const agenda = [
  ["Martes","Cocina inicial","Tartas"],["Miércoles","Masa madre"],
  ["Jueves","Cocina intermedia"],["Viernes","Pan de campo"],
  ["Sábado","Bollería","Decoración"]
];

//recorrido por matriz
for (const agn of agenda) {
  //dias guardados
  const dias = agn[0];
  // cantidad de talleres por dia
  const cantidad = agn.length - 1;
  //salida de informacion
  console.log(`${dias} (${cantidad}): ${agn.slice(1).join(", ")}`);
}

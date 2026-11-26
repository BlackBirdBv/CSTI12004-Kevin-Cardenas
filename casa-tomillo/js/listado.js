//filtra los que estan por debajo de 75000
//funcion para filtrar los que bajan de 75k
const menosQue = catalogo.filter((c) => c.precio < 75000);
//incluye la matricula
let matriculaIncluida = catalogo.map((m) => conMatricula(m.precio));
//contador inicializado
let economicos = 0;
//muestra en consola solo los fiiltrados previamente
menosQue.forEach(menosQue => {
  console.log(`${menosQue.nombre}: ${enColones(menosQue.precio)}`);
  economicos++; //cuanta cada uno
});
//muestra lo contado en cosola
console.log(`Economicos: ${economicos}`);
//muestra las el precio con las matriculas en cosola
console.log(`Con matricula: ${matriculaIncluida.join(", ")}`);


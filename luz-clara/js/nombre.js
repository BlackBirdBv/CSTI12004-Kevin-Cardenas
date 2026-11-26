// nombre.js - Controles con el mismo name (final de contacto.html)

//getElementsByName: los tres botones de opcion con name="lugar"
const lugares = document.getElementsByName("lugar");
console.log(`Opciones de "lugar": ${lugares.length}`);

//value: es lo que formulario envia por cada opcion
lugares.forEach((r) => console.log(`value de una opción: ${r.value}`));

//Los texto que si se ven estan en las etiquetas
const etiquetas = document.querySelectorAll(".opcion-etiqueta");
//etiquetas[0]: esta llamando a la primera etiqueta (posicion 0)
console.log(`Texto de la 1.ª opción: ${etiquetas[0].textContent}`);

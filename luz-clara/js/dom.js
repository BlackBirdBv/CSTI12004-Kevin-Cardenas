// dom.js - Recorre el árbol de nodos de index.html (al final del body)

//texto que esta dentro de la etiqueta <title>
console.log(`Título de la página: ${document.title}`);  
//Es el nodo <html>: la raiz de todos los elementos
const raiz = document.documentElement;
console.log(`Raíz: ${raiz.tagName} · hijos: ${raiz.children.length}`);

//accede al nodo <body>
const cuerpo = document.body;
//ecorre los hijos directos de body o saltando los nodos script
for (const hijo of cuerpo.children) {
  if (hijo.tagName !== "SCRIPT") {
    //muestra la etiqueta del hijo y su id (ejem: MAIN . id contenido)
    console.log(`Hijo de <body>: ${hijo.tagName} · id ${hijo.id}`);
  }
}
//children[1] = segundo hijo de <body> (posicion 1: <main>)
const principal = cuerpo.children[1];
//parentElement sube un nivel: el padre de <main> que es <body> 
console.log(`Padre de <main>: ${principal.parentElement.tagName}`);
//firstElementChild baja un nivel: el hijo de <main> que es <id = portada> 
console.log(`Primer hijo de <main>: ${principal.firstElementChild.id}`);
//children.length: cuantas secciones hay dentro de <main>   
console.log(`Secciones dentro de <main>: ${principal.children.length}`);

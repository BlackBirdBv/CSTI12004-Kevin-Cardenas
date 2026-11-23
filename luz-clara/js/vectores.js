// vectores.js - Un vector (array) guarda varios valores en orden
const servicios = ["Retrato", "Familiar", "Eventos"]; // corchetes
console.log(servicios[0]);                            // posición 0: el primero
console.log(servicios.length);                        // cantidad de elementos
servicios.push("Perfil");                             // agrega al final
console.log(servicios.join(", "));                    // une todo en un texto
const ultimo = servicios.pop();                       // quita el último
console.log(ultimo, servicios.length);                // el quitado y cuántos quedan

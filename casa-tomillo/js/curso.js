//Ejercicio 2 · Clase Curso
//clase cursos
class curso{
  constructor (nombre, precio, vacantes){
    this.nombre = nombre;
    this.precio = precio;
    this.vacantes = vacantes;
  }
  //funcion para mostrar un resumen 
  resumen() {
    return `${this.nombre} · ${enColones(this.precio)} · ${this.vacantes}`;
  }
  //funcion para inscribir 
  inscribir(cantidad) {
    if (cantidad > this.vacantes) {
      return `Solo quedan ${this.vacantes} cupos`;
    } else {
      this.vacantes -= cantidad;
      return `Inscritas ${cantidad}. Quedan ${this.vacantes}`;
    }
  }
}

//instancia por curso
const masaMadre = new curso("Panadería · Masa madre", 95000, 8);
const tartas = new curso("Repostería · Tartas", 82000, 3);

//llamados de funciones
console.log(masaMadre.resumen());
console.log(masaMadre.inscribir(2));
console.log(tartas.resumen());
console.log(tartas.inscribir(5));
console.log(tartas.inscribir(3));

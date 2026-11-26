// Ejercicio 1 · Funciones para cotizar
//funcion formato colones 
function enColones(monto) {
  return `¢${monto.toLocaleString("es-CR")}`;
}
//funcion con la matricula incluida
const conMatricula = (monto) => monto + 10000;

//funcion de validacion de descuento y cantidad min y max
function costoGrupo(monto, cantidad) {
  //valida si la cantidad se encuentra dentro de rango o si es un numero
  if (isNaN(cantidad) || cantidad < 1 || cantidad > 8) {
    console.log("Cantidad inválida");
  } else {
    //valida el descuento
    if (cantidad >= 3) {
      const totalGrupo = ((conMatricula(monto) * cantidad) * 0.9);
      return enColones(totalGrupo);
    } else {
      const totalGrupo = (conMatricula(monto) * cantidad);
      return enColones(totalGrupo);
    }
  }
}

//llamadas a funciones
console.log(enColones(95000));
console.log(conMatricula(68000));
console.log(costoGrupo(68000, 2));
console.log(costoGrupo(95000, 3));
console.log(costoGrupo(95000, 9));

//vista.js - VISTA: Muestra dlos datos (por ahora en consola)
class VistaReservas {   //la clase de la vista. No tiene constructor porque no nesecita guardar datos propios. JS
  mostrar(lista) {
    lista.forEach((r, i) => {   //i es la posicion (r, i) dos parametros del callback
      //forEach entrega el elemento (r) y su poscion (i) que empieza en cero 
      console.log(`${i + 1}. ${r.cliente}. ${r.servicio}`); //r.cliente . r.servicio son propiedades de cada reserva. La vista solo lee datos, no los cambia
    });
  }
  mostrarIngreso(monto) {
    console.log(`Ingresos: ¢${monto.toLocaleString("es-CR")}`);
  }
  error(texto) {
    console.error(texto); //mensaje en rojo
  }
}
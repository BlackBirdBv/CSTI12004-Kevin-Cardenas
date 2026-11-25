// modelo.js - modelo: los datos de las reservas y sus reglas
class Reserva {
  constructor (cliente, servicio, precio){  //constructor con sus metodos
    this.cliente = cliente;                 // This. el objeto se esta creando .cliente propiedad del objeto
    this.servicio = servicio;               //= cliente el parametro
    this.precio = precio;                   
  }
}
class Reservas {                  //segunda clase del modelo. Es el conjunto de todas las reservas en plural.
  constructor() {
    this.lista = [];              //todas las reservas. Propiedad vector empieza vacia y guarda objetos de reserva
  }
  agregar(reserva) {              //metodo con parametro
    if (reserva.precio <= 0) {    //regla de negocio. reserva.precio es propiedad de otro objeto.
      return false;               //no se guarda
    }
    this.lista.push(reserva);     //push sobre la propiedad. guarda la reserva en la lista de este objeto.
    return true;
  }
  ingresos() {
    let suma = 0;
    this.lista.forEach((r) => {   //forEach con callback. r es cada reserva; se suma su precio
      suma += r.precio;
    });
    return suma;
  }
}
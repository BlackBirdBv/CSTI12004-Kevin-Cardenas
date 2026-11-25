//reservas.js - ARRANQUE: une el modelo la vista y el contorlador
const modelo = new Reserva(); //inistancia del modelo. parentesis vacio porque el constructor no recibe datos.
const vista = new VistaReservas();
const reservas = new ControladorReservas(modelo, vista); //instancia del controlador. recibelos dos objetos ya creados.

reservas.reservar("Ana Rodriguez", "Familiar", 75000);  //metodo del controlado. es la accion del usuario.
reservas.reservar("Luis Mora", "Perfil profesional", 38000); 
reservas.reservar("Prueba", "Individual", 0);
reservas.actualizar();
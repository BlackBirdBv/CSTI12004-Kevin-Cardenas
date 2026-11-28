class ControladorGrupo{
  constructor(modelo,vista){
    this.modelo = modelo;
    this.vista = vista;
  }
  inscribir(nombre, personas){
    const inscripcion = new Inscripcion(nombre,personas);
    if (!this.modelo.ocupados(inscripcion)) {
      this.vista.error(`No hay cupo para ${nombre}: ${personas}`);
    }
  }
  actualizar(){
    this.vista.mostrar(this.modelo.lista);
  }
}
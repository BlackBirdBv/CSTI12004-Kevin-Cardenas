//Ejercicio 3 (tarea para la S10) · Miniaplicación MVC de inscripciones
class VistaGrupo{
  mostrar(grupo){
    const g = new Grupo();
    console.log(`Masa madre · ${g.ocupados()} de 8`);
    grupo.forEach((i) => {
      const i = new Inscripcion(nombre, personas);
      console.log(`${i.nombre}: ${i.persona}`);
    });
  }
  error(texto){
    console.error(texto);
  } 
}
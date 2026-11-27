//vista.js - VISTA: Muestra dlos datos (por ahora en consola)
class VistaReservas {   
  //recibir la lista de reservas del modelo y la escribe en el <ol>
  mostrar(lista){
    //el <ol> id = "lsita-reservas" que se agregó en contacto.hmtl
    const ol = document.getElementById("lista-reservas");
    //vaciar el ol prar no repetir reservas 
    ol.innerHTML = "";
    lista.forEach((r) => {
      const li = document.createElement("li");
    });
  }
}
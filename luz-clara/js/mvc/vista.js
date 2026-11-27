//vista.js - VISTA: Muestra dlos datos (por ahora en consola)
class VistaReservas {   
  //recibir la lista de reservas del modelo y la escribe en el <ol>
  mostrar(lista){
    //el <ol> id = "lista-reservas" que se agregó en contacto.hmtl
    const ol = document.getElementById("lista-reservas");
    //vaciar el ol prar no repetir reservas 
    ol.innerHTML = "";
    //r: cadad reserva (objeto del modelo)
    lista.forEach((r) => {
      const li = document.createElement("li");
      //el texto: cliente y servicio de las reserva
      li.textContent = `${r.cliente} . ${r.servicio}`;
      //Lo agrega al final de <ol>
      ol.append(li);
    });
  }
  //Recibe el total de ingresos y los va escribir en <p id="ingresos">
  mostrarIngresos(monto){
    const p = document.getElementById("ingresos");
    const m = monto.toLocaleString("es-CR");
    //innerHTML porque lleva la etiqueta <strong>
    p.innerHTML = `Ingresos: <strong>¢${m}</strong>`;
  }
  error(texto){
    const aviso = document.getElementById("aviso-reservas");
    aviso.textContent = texto;
    console.error(texto);
  }
}

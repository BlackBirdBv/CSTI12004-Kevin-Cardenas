try{
  const entrada = prompt("Escriba el dia");
  const dia = entrada.trim().toLowerCase();

  switch (dia) {
    case "domingo": case "lunes":
      console.log(`El ${dia} está cerrado`);
      break;
    default:
      console.log(`El ${dia} abre de 10:00 a. m. a 7:00 p. m.`);
      break;
  }

} catch (error) {
  console.warn("No se indicó un día.");
} finally {
  console.log("Casa Tomillo · Barrio Amón");
}

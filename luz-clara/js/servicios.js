//servicios.js - las tarifas con callbacks
const tarifas = [
  { servicio: "Individual", monto: 45000 },
  { servicio: "Familiar", monto: 75000 },
  { servicio: "Perfil profesional", monto: 38000 },
  { servicio: "Catalogo basico", monto: 30000 },
  { servicio: "Media jornada", monto: 120000 },
];
tarifas.forEach((t) => {
  console.log(`${t.servicio}: ${formatoColones(t.monto)}`);
});
const nombres = tarifas.map((t) => t.servicio);
console.log(`Servicio: ${nombres.join(", ")}`);

const economicos = tarifas.filter((t) => t.monto < 50000);
console.log(`Menos de ¢50 000: ${economicos.length}`);
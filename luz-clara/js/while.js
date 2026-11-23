//while.js - repetir mientras condicion sea true
let fotos = 3;                                //fotos por entregar
while (fotos > 0){                            //¿quedan fotos?
  console.log(`entregando la foto ${fotos}`);
  fotos--;                                    //resta 1: fotos = fotos - 1
}
console.log(`Todas entregadas`);
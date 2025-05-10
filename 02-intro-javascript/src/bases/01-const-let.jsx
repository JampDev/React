// Variable y constantes

const nombre = 'Jonathan';
const apellido = 'Morocho';

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);

// var NO se debe usar...
if (true){
  //Aqui es otro scope
  let valorDado = 6;
  console.log(valorDado);
}

console.log(valorDado);



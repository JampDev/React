const personajes = ['Goku', 'Vegueta', 'Trunks'];

const [, , p3] = personajes;

console.log(p3);

const retornaArreglo = () => {
  return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras);

//1. El primer valor del arreglo se llamara nombre
//2. El segundo se llamara setNombre
const useState = (valor) => {
  return [valor, ()=>{console.log('Hola Mundo')}]
}

const [nombre, setNombre ] = useState('Goku');
console.log(nombre);
setNombre();
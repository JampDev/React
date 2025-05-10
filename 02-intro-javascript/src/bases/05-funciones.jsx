const saludar = function (nombre) {
  return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola mundo`;

console.log(saludar3('Goku'));
console.log(saludar4());

const getUser = () =>
({
  uid: 'ABC123',
  username: 'El_papi2323'
})

const user = getUser();

console.log(user);

//1. Transfrmar a funcion flecha
//2. Retornar objeto implicito
//3. Pruebas
const getUsuarioActivo = ( nombre ) =>({
    uid: 'ABCS231',
    username: nombre
})

const usuarioActivo = getUsuarioActivo('Jonathan');
console.log(usuarioActivo);
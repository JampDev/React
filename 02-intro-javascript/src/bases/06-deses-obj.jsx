//Desestructuracion
//Asignacion desestructurante

const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman'
}

const {nombre,edad,clave} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const useContext = ({nombre, clave, edad, rango = 'Capitan'}) =>{
  //const{edad, clave, nombre} = usuario;
  //console.log(edad, nombre, rango)
  return {
    nombreClave: clave,
    anios: edad,
    latlng:{
      lat: 21.32432,
      lng: 23.53456
    }
  }
}

const {nombreClave, anios, latlng:{lat,lng}} = useContext(persona);
console.log(nombreClave, anios);
console.log(lat, lng);

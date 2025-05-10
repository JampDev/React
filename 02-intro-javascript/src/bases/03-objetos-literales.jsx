const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    zip: 2131233,
    lat: 14.3232,
    lng: 34.952323
  }
};

//console.table(persona);
console.log(persona);

//const persona2 = persona;
const persona2 = {...persona};
persona2.nombre = 'Peter';

console.log(persona2);
console.log(persona);
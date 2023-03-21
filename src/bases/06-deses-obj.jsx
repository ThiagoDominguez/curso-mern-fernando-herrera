// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

const persona = {
  nombre: "tony",
  edad: 45,
  clave: "Ironman",
};
// desestructuracion de objetos literales
const { nombre, edad, clave } = persona;

console.log(persona);
console.log(nombre);
console.log(edad);
console.log(clave);

const useContext = ({ nombre, edad, rango = "Capitan" }) => {
  console.log(nombre, edad, rango);

  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 234234234,
      lng: 1212121,
    },
  };
};
const {
  nombreClave,
  anios,
  latlng: { lat, lng }, // * Desestructuracion anidada
} = useContext(persona);

console.log(nombreClave, anios);

console.log(lat, lng);

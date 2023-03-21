const personajes = ["Goku", "Vegeta", "Trunks"];

// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

// const [, , p3] = personajes;

// console.log(p3);

const retornaArr = () => {
  return ["ABC", 123];
};

// const arr = retornaArr();

// const [letras, numeros] = arr;

// console.log(letras);
// console.log(numeros);

//* tarea
//! 1. El primer valor del array se llamará nombre
//! 2. la funcion del array se llamará setNombre

const useState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola Mundo");
    },
  ];
};

const arr = useState("Goku");
const [nombre, setNombre] = arr;

console.log(arr);

setNombre();

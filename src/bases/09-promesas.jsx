import { getHeroById } from "./bases/08-imp-exp";

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const hero = getHeroById(2);
//     resolve(hero);
//     // reject("no se pudo encontrar el heroe");
//   }, 2000);
// });

// promesa
//   .then((heroe) => {
//     console.log("heroe obtenido" + "" + heroe); //! si concatenamos asi el object , nos va a devolver como valor [object object]
//     console.log("heroe obtenido", heroe); //* Asi funciona correctamente
//   })
//   .catch((err) => console.warn(err));

//* Si se ejecuta correctamente la promesa ejecuta un resolve y entra en el .then
// ! caso contrario ejecuta el reject y entra en el .catch

const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(id);
      if (hero) {
        resolve(hero);
      } else {
        reject("No se pudo encontrar el heroe");
      }
    }, 2000);
  });
};

getHeroByIdAsync(4).then(console.log).catch(console.warn);

//* Si pasamos solamente los console del then y catch sin parentesis , van a tomar como argumento lo que tengan el resolve y el reject

import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe("Pruebas en promesas y funciones asincronas", () => {
  test("Debe retornar un heroe async", (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toBe(heroes[0]);
      done();
    });
  });
  // ! Cuando se trabaja con funciones asincronas es necesario usar el argumento de test "done" y ejecutarlo al final de la prueba asincrona
  test("Debe retornar error si el heroe por id no existe", (done) => {
    const id = 10;
    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe("No se pudo encontrar el héroe");
      done();
    });
  });
});

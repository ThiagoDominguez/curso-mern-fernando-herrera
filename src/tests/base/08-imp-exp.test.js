import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("Prueba en funciones de heroes", () => {
  test("Debe retornar un heroe", () => {
    const id = 1;
    const heroe = getHeroeById(id);

    const heroeData = heroes.find((hero) => hero.id === id);

    expect(heroe).toEqual(heroeData);
  });
  test("Debe retornar undefined si heroe no existe", () => {
    const id = 10;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });
  test("Debe retornar un arreglo con los heroes de DC", () => {
    const owner = "DC";
    const getOwner = getHeroesByOwner(owner);
    const filter = heroes.filter((heroe) => heroe.owner === owner);

    expect(getOwner).toEqual(filter);
  });
  test("Debe retornar un arreglo con los heroes de Marvel", () => {
    const owner = "Marvel";
    const byLength = getHeroesByOwner(owner);

    expect(byLength.length).toBe(2);
  });
});

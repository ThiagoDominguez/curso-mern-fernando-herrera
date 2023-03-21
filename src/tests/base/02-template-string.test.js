import { getSaludo } from "../../base/02-template-string";

describe("Pruebas en template-strings.js", () => {
  test(" getSaludo  debe retornar hola thiago ", () => {
    const nombre = "Thiago";

    const saludo = getSaludo(nombre);
    console.log(saludo);
    expect(saludo).toBe("Hola " + nombre);
  });

  // getSaludo debe retornar Hola Carlos si no hay argumento en nombre
  test("getSaludo debe retornar Hola Carlos si no hay argumento en nombre", () => {
    const saludo = getSaludo();
    expect(saludo).toBe("Hola Carlos");
    console.log(saludo);
  });
});

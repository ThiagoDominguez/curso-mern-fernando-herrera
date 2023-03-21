// import { expect } from "vitest"; //! Esto no es parte de jest y causa errores en las pruebas

// * El describe funciona para agrupar pruebas, para ordenar un poco todo
describe("Pruebas en el archivo demo.test.js", () => {
  test("Deben de ser iguales los strings", () => {
    // ? 1. Inicializacion
    const mensaje = "Hola mundo";

    // ? 2. Estimulo
    const mensaje2 = `Hola mundo`;
    // ? 3. Observar Comportamiento
    expect(mensaje).toBe(mensaje2);
    // * expect -> espera un valor como parametro, toBe -> compara ese 1er valor con el que pasamos en toBe
  });
});

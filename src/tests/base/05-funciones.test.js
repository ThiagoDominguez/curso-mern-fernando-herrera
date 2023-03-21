import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("getUser debe retornar un objeto", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    // expect(user).tobe(userTest); //! return false

    // ! El metodo toBe() no funcionara en el caso de la comparacion de 2 objetos, para ello utilizar toEqual()/toStrictEqual()

    expect(user).toStrictEqual(userTest);
    expect(user).toEqual(userTest);
  });

  test("getUsuarioActivo debe retornar un objeto ", () => {
    const usuario = {
      uid: "ABC567",
      username: "Fernando",
    };

    const usuarioActivo = getUsuarioActivo("Fernando");

    expect(usuarioActivo).toEqual(usuario);
  });
});

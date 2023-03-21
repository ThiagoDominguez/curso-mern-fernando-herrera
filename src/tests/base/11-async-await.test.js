import getImagen from "../../base/11-async-await";

describe("Pruebas en async-await", () => {
  test("Debe retornar el url de la imagen", async () => {
    const url = await getImagen();
    console.log(url);

    expect(typeof url).toBe("string");
  });
});

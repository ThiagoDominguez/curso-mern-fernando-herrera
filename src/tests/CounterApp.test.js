import React from "react";
import CounterApp from "../CounterApp";
import { shallow } from "enzyme";
{
  import("jest").Config;
}

describe("Pruebas en componente CounterApp", () => {
  // let wrapper;//!Al inicializar esto sin valor pasa a ser undefined , por lo tanto en el scope de cada test perdemos el intelisense de autocompletado
  let wrapper = shallow(<CounterApp />);

  beforeEach(() => {
    //* Esto se ejecuta cada vez que ingresa a una prueba

    wrapper = shallow(<CounterApp />);
    // ! Aqui estariamos inicializando el CounterApp de nuevo por cada prueba
  });

  test("Debe de mostrarse el CounterApp correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar el valor por defecto de 100", () => {
    const wrapper = shallow(<CounterApp value={100} />);

    const valueCount = wrapper.find("h2").text().trim();
    expect(valueCount).toBe("100");
  });

  test("Debe de incrementar al presionar el boton suma", () => {
    wrapper.find("button").at(0).simulate("click");

    const valueCount = wrapper.find("h2").text().trim();

    expect(valueCount).toBe("11");
  });
  test("Debe de decrementar al presionar el boton resta", () => {
    wrapper.find("button").at(1).simulate("click");
    const valueCount = wrapper.find("h2").text().trim();

    expect(valueCount).toBe("9");
  });
  test("Debe de resetear el contador al presionar el boton resetear", () => {
    wrapper.find("button").at(2).simulate("click");
    const valueCount = wrapper.find("h2").text().trim();

    expect(valueCount).toBe("0");
    console.log(valueCount);
  });
});

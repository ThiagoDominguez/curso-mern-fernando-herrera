import React from "react";
import PrimeraApp from "../PrimeraApp";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";

Enzyme.configure({ adapter: new Adapter() });
import { createSerializer } from "enzyme-to-json";

expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

// import PropTypes from "prop-types";

describe("Pruebas en <PrimeraApp/>", () => {
  // test('Debe de mostrar el mensaje "Hola soy goku"', () => {
  //   const saludo = "Hola soy goku";

  //   const { getByText } = render(<PrimeraApp saludo={saludo} />);

  //   expect(getByText(saludo)).toBeInTheDocument();
  // });

  test("Debe mostrar <PrimeraApp/>", () => {
    const saludo = "Hola soy goku";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar el subtitulo enviado por props", () => {
    const saludo = "Hola soy goku";
    const subtitulo = "Soy un subtitulo";
    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subtitulo} />
    );

    const textP = wrapper.find("p").text();
    console.log(textP);
    expect(textP).toBe(subtitulo);
  });
});

// import React, { Fragment } from "react";
import React from "react";
import PropTypes from "prop-types";
const PrimeraApp = ({ saludo, subtitulo }) => {
  return (
    <>
      {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}

      <h1>{saludo}</h1>
      <p>{subtitulo}</p>
    </>
  );
};

// * un Fragment evita que dentro del div original con id app, tengas otro div , basicamente lo que hará es embeber los elementos dentro del Fragment directamente en el div de app
{
  /* <Fragment>
  <h1>Hola Mundo</h1>
  <p>Mi primera aplicación</p>
</Fragment> */
}

// * Si queremos hacer una version mas corta del Fragment y sin importar nada , podemos hacerlo dejando las etiuquetas de apertura y cierre vacias, y conseguiremos lo mismo
{
  /* <>
  <h1>Hola Mundo</h1>
  <p>Mi primera aplicación</p>
</>; */
}

// * PropTypes
PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};

// * defaultProps
PrimeraApp.defaultProps = {
  subtitulo: "Soy un subtitulo",
};
export default PrimeraApp;

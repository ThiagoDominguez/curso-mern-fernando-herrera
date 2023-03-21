const getImagen = async () => {
  //

  try {
    const apiKey = "LRIaoY14plvvi47SMektTGHK5t5Z3fuB";
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();

    const { url } = data.images.original;

    return url;
  } catch (error) {
    return `No existe , error: ${error}`;
  }
};

export default getImagen;

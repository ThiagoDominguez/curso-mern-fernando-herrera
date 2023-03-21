// const getImgPromise = () => new Promise((res) => res("Hay data"));
// getImgPromise().then(console.log);

// * al poner async estamos creando una funcion asincrona, para poder usar el await necesita ser asincrona
const getImgAsync = async () => {
  // * el manejo de errores de async/await es mediante try/catch
  try {
    const apiKey = "2gUwF0NP1oSP4R6aC2phLBYkOGHIIgKf";
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();

    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;

    document.body.append(img);
  } catch (error) {
    console.error(error);
  }
};

getImgAsync();

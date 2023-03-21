export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=LRIaoY14plvvi47SMektTGHK5t5Z3fuB`;
  const res = await fetch(url);
  const { data } = await res.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  return gifs;
};

//* El metodo encodeURI(params) transforma un string en  tipo URL digamos que le quita los espacios y le agrega la simbologia que utiliza la web para tapar esos espacios

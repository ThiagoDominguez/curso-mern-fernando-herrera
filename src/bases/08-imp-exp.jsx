import heroes, { owners } from "../data/heroes";

// console.log(owners);
// * find
const getHeroById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};

// console.log(getHeroById(2));
// console.log(getHeroById(3));

// console.log(getHeroById(4));

// * filter
const getHeroByOwner = (owner) => {
  return heroes.filter((hero) => hero.owner === owner);
};

// console.log(getHeroByOwner("Marvel"));
// console.log(getHeroByOwner("DC"));

export { getHeroById, getHeroByOwner };

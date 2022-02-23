const BASE_URL = 'https://api.thecatapi.com/v1/breeds';

const fetchBreedCats = async (orderBy = 'asc') => {
  const result = await fetch(BASE_URL);
  const data = await result.json();

  const filterCatsByImage = data.filter((breedCat) => {
    return breedCat.image?.url;
  });

  const breedCatsWithImage = filterCatsByImage.map((breedCat) => {
    const {
      description,
      id,
      image,
      name,
      origin,
      wikipedia_url,
      temperament,
      life_span,
    } = breedCat;
    return {
      id,
      name,
      description,
      image: image.url,
      temperament,
      origin,
      wiki: wikipedia_url,
      lifeSpan: life_span,
    };
  });

  if (orderBy === 'asc') {
    breedCatsWithImage.sort((a, b) => {
      const originA = a.origin.toLowerCase();
      const originB = b.origin.toLowerCase();

      if (originA < originB) {
        return 1;
      }

      if (originA > originB) {
        return -1;
      }
      return 0;
    });
  }

  return breedCatsWithImage;
};

export { fetchBreedCats };

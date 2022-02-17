const BASE_URL = "https://api.thecatapi.com/v1/breeds";

const fetchBreedCats = async () => {
  const result = await fetch(BASE_URL);
  const data = await result.json();

  const filterCatsByImage = data.filter(breedCat => {
    return breedCat.image?.url
  });
  
  const breedCatsWithImage = filterCatsByImage.map(breedCat => {
    const {description, id, image, name, origin, wikipedia_url, temperament} = breedCat;
    return {
      id,
      name,
      description,
      image: image.url,
      temperament,
      origin,
      wiki: wikipedia_url
    }
  })
  console.log(breedCatsWithImage);
  return breedCatsWithImage;
}
export {fetchBreedCats};
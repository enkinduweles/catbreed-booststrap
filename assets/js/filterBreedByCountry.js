const listCountriesHaveCats = (elements) => {
  const countries = new Set();
  console.log(elements);
  elements.map((element) => {
    const { origin } = element;
    countries.add(origin);
  });

  return countries;
};

const filterBreedByCountry = (elements, country) => {
  const resultByCountry = elements.filter((element) => {
    return element.origin === country;
  });

  console.log(resultByCountry);
  return resultByCountry;
};

export { filterBreedByCountry, listCountriesHaveCats };

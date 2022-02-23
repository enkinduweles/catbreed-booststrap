const listCountriesHaveCats = (elements) => {
  const countries = new Set();

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

  return resultByCountry;
};

export { filterBreedByCountry, listCountriesHaveCats };

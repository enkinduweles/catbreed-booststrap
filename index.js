import { fetchBreedCats } from './assets/js/api/fetch-breed-cats.js';
import createElement from './assets/js/createElement.js';
import {
  filterBreedByCountry,
  listCountriesHaveCats,
} from './assets/js/filterBreedByCountry.js';
import render from './assets/js/render.js';

const rootElement = document.querySelector('main');

const config = {
  perPage: 4,
  rewind: true,
  pagination: false,
  height: '20rem',
  cover: true,
  gap: '.7rem',
  padding: { right: '3rem' },
  breakpoints: {
    768: {
      perPage: 2,
      gap: '.7rem',
      height: '20rem',
      arrows: false,
    },
    480: {
      perPage: 1,
      gap: '.7rem',
      height: '20rem',
      arrows: false,
    },
  },
};

(async () => {
  const breedCats = await fetchBreedCats();
  const countries = listCountriesHaveCats(breedCats);
  const elementsToRender = createElement(breedCats, countries);

  render(elementsToRender, rootElement);

  const elms = document.getElementsByClassName('splide');

  for (let i = 0; i < elms.length; i++) {
    const childCount = elms[i].querySelector('.splide__list').childElementCount;
    const configCustom = {
      arrows: false,
    };

    if (childCount < 5) {
      new Splide(elms[i], { ...config, ...configCustom }).mount();
    } else {
      new Splide(elms[i], config).mount();
    }
  }
})();

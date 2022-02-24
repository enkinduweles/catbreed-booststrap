import { fetchBreedCats } from './api/fetch-breed-cats.js';
import { createElement } from './createElement.js';
import { listCountriesHaveCats } from './filterBreedByCountry.js';
import render from './render.js';
import { createSplideInstance } from './lib/splide.js';

const rootElement = document.querySelector('main');

(async () => {
  const breedCats = await fetchBreedCats();
  const countries = listCountriesHaveCats(breedCats);
  const elementsToRender = createElement(breedCats, countries);

  render(elementsToRender, rootElement);

  createSplideInstance();

  const modalContainer = document.getElementById('modalInfo');

  modalContainer.addEventListener('show.bs.modal', function (event) {
    const targetElement = event.relatedTarget;

    const breedId = targetElement.getAttribute('data-bs-breed');

    const [foundBreed] = breedCats.filter((breed) => {
      return breed.id === breedId;
    });

    const catTemperament = foundBreed.temperament.split(',');

    const modalTitle = document.querySelector('.modal-title');
    const modalDescription = document.querySelector('#description p');
    const modalBodyLifeSpan = document.querySelector('#lifeSpan span');
    const modalBodyTemperament = document.querySelectorAll('#temperament span');
    const modalBodyWiki = document.querySelector('#wiki a');

    modalTitle.textContent = foundBreed.name;
    modalDescription.textContent = foundBreed.description;
    modalBodyLifeSpan.textContent = `${foundBreed.lifeSpan} years`;

    modalBodyTemperament.forEach((element, index) => {
      element.textContent = catTemperament[index];
    });

    modalBodyWiki.setAttribute('href', foundBreed.wiki);
    modalBodyWiki.textContent = `More about ${foundBreed.name}`;
  });
})();

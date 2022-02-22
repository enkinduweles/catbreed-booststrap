import { filterBreedByCountry } from './filterBreedByCountry.js';

const createMainElement = (cats) => {
  const container = document.createElement('div');
  // container.classList.add('bg-dark', 'bg-gradient');

  // container.style.height = '80vh';

  const catTemperament = cats[0].temperament.split(',');

  const catLifeSpan = `
  <div class="border-bottom border-contrastTerciary pb-3 mb-3">
  <p class="d-inline-block text-contrastTerciary fw-bold text-uppercase w-25 mb-0">Life span:</p>
  <span class="text-light">${cats[0].lifeSpan} years</span>
  </div>
  
  `;

  const listCatTemperament = `
  <div class="border-bottom border-contrastTerciary pb-3 mb-3">
  <p class="d-inline-block text-contrastTerciary fw-bold text-uppercase w-25 align-top mb-0">Temperament:</p>
  <div class="d-inline-block">
    ${catTemperament
      .map((temperamentName) => {
        return `<span class="text-light d-block">${temperamentName}</span>`;
      })
      .join('')}
  </div>
  </div>
  `;

  const wikiLink = `
  <div class="border-bottom border-contrastTerciary pb-3 mb-3">
  <p class="d-inline-block text-contrastTerciary fw-bold text-uppercase w-25 mb-0">Wiki:</p>
  <a class="text-light" href="#" role="button">Link</a>
  </div>
  `;

  const modal = `
  <div class="modal fade" id="modalInfo" tabindex="-1" aria-labelledby="modalInfo" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content bg-secondary">
      <div class="modal-header border-2 border-contrastTerciary">
        <h4 class="modal-title text-contrastTerciary" id="modalInfolabel">${cats[0].name}</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ${catLifeSpan}
        ${listCatTemperament}
        ${wikiLink}
      </div>
    </div>
  </div>
</div>
  `;

  const banner = `
  <div class="card border-0 rounded-0"  style="height: 50vh">
  <img src="${cats[0].image}" class="card-img rounded-0 img-fluid" style="height: 100%; object-fit: cover" alt="">
  <div class="card-img-overlay rounded-0 bg-overlay-gradient">
  <div class="d-flex flex-column justify-content-center h-100" style="max-width: 736px">
    <h2 class="card-title text-contrastTerciary mb-4 display-3">${cats[0].name}</h2>
    <p class="card-text text-light fs-5 clamp">${cats[0].description}</p>
    <button type="button" class="btn btn-contrastPrimary align-self-start" data-bs-toggle="modal" data-bs-target="#modalInfo">
    <i class="bi bi-info-circle"></i>
      See more
    </button>
    </div>
  </div>
</div>
${modal}
  `;

  return banner;
};

const createCarousel = (elements) => {
  const dataFromAPI = [...elements];

  const carousel = `
    <div class="splide">
    <div class="splide__track">
      <ul class="splide__list">
      ${dataFromAPI
        .map((item) => {
          return `
        <li class="splide__slide">
          <img src="${item.image}" />
        </li>
        `;
        })
        .join('')}
      </ul>
    </div>
  </div>
    `;

  return carousel;
};

const createSection = (elements, countries) => {
  const countriesParsed = Array.from(countries);

  const sections = countriesParsed
    .map((country) => {
      return `
      <section class="container mb-5">
        <h3 class="text-contrastTerciary mt-2 mb-3">${country}</h3>
        ${createCarousel(filterBreedByCountry(elements, country))}
        </section>
      `;
    })
    .join('');

  return sections;
};

const createElement = (elements, countries) => {
  const banner = createMainElement(elements);
  const sections = createSection(elements, countries);

  return `${banner}${sections}`;
};

export default createElement;

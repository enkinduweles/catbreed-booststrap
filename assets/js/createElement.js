import { filterBreedByCountry } from './filterBreedByCountry.js';

const createBanner = (elements) => {
  const catBreeds = [...elements];

  const banner = `
  <div class="card border-0 rounded-0"  style="height: 50vh">
  <img src="${catBreeds[0].image}" class="card-img rounded-0 img-fluid" style="height: 100%; object-fit: cover" alt="">
  <div class="card-img-overlay rounded-0 bg-overlay-gradient-50">
  <div class="d-flex flex-column justify-content-center h-100" style="max-width: 736px">
    <h2 class="card-title text-contrastTerciary mb-4 display-3">${catBreeds[0].name}</h2>
    <p class="card-text text-light fs-5 text-truncated">${catBreeds[0].description}</p>
    <button data-bs-breed=${catBreeds[0].id} type="button" class="btn btn-contrastPrimary align-self-start" data-bs-toggle="modal" data-bs-target="#modalInfo">
    <i class="bi bi-info-circle me-1   "></i>
      See more
    </button>
    </div>
  </div>
</div>
  `;

  return banner;
};

const createModal = (content) => {
  const catTemperament = content.temperament.split(',');

  const description = `
  <div id="description" class="d-flex flex-column align-items-center border-bottom border-contrastTerciary pb-3 mb-3">
  <p class="text-light">${content.description} years</p>
  </div>
  `;

  const catLifeSpan = `
  <div id="lifeSpan" class="d-flex flex-column align-items-center border-bottom border-contrastTerciary pb-3 mb-3">
  <p class=" text-contrastTerciary fw-bold text-uppercase mb-1">Life span</p>
  <span class="text-light">${content.lifeSpan} years</span>
  </div>
  `;

  const listCatTemperament = `
  <div id="temperament" class="d-flex flex-column align-items-center border-bottom border-contrastTerciary pb-3 mb-3">
  <p class="text-contrastTerciary fw-bold text-uppercase align-top mb-1">Temperament</p>
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
  <div  id="wiki" class="d-flex flex-column align-items-center border-bottom border-contrastTerciary pb-3 mb-3">
  <p class="text-contrastTerciary fw-bold text-uppercase mb-1">Wiki</p>
  <a class="text-light" href="${content.wiki}" role="button">More about ${content.name}</a>
  </div>
  `;

  const modal = `
  <div class="modal fade" id="modalInfo" tabindex="-1" aria-labelledby="modalInfo" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content bg-secondary">
      <div class="modal-header border-2 border-contrastTerciary">
        <h4 class="modal-title text-contrastTerciary" id="modalInfolabel">${content.name}</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ${description}
        ${catLifeSpan}
        ${listCatTemperament}
        ${wikiLink}
      </div>
    </div>
  </div>
</div>
  `;

  return modal;
};

const createCarousel = (elements) => {
  const catBreeds = [...elements];

  const carousel = `
    <div class="splide">
    <div class="splide__track">
      <ul class="splide__list">
      ${catBreeds
        .map((catBreed) => {
          return `
        <li class="splide__slide ">
        <img src="${catBreed.image}" />
         
          <div data-bs-breed=${catBreed.id} data-bs-toggle="modal" data-bs-target="#modalInfo" class="btn d-flex justify-content-center align-items-end bg-overlay-gradient-25 h-100 w-100 text-center pt-2 pb-2">
          <span class="text-contrastTerciary fw-bold">${catBreed.name}</span>
          </div>
        
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
  const countriesToArray = Array.from(countries);

  const sections = countriesToArray
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

const createElement = (catBreeds, countriesHaveCats) => {
  const banner = createBanner(catBreeds);
  const sections = createSection(catBreeds, countriesHaveCats);
  const modal = createModal(catBreeds[0]);

  return `${banner}${sections}${modal}`;
};

export { createElement };

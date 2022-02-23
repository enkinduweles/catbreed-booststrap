import config from './configSplide.js';

export const createSplideInstance = () => {
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
};

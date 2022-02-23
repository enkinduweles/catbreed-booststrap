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
      perPage: 3,
      gap: '.7rem',
      height: '20rem',
      arrows: false,
    },
    576: {
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

export default config;

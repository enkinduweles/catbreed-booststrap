const config = {
  perPage: 6,
  rewind: true,
  pagination: false,
  height: '12rem',
  cover: true,
  gap: '.7rem',
  padding: { right: '2rem' },
  breakpoints: {
    992: {
      perPage: 4,
      gap: '.7rem',
      height: '12rem',
      arrows: false,
    },
    600: {
      perPage: 3,
      gap: '.7rem',
      height: '12rem',
      arrows: false,
    },
    500: {
      perPage: 2,
      gap: '.7rem',
      height: '12rem',
      arrows: false,
    },
  },
};

export default config;

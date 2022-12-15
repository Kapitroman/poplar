const clientsExperiencesSlider = document.querySelector('.clients-experiences__slider');

const initSwiper = (slider) => {
  let swiper;

  // eslint-disable-next-line no-undef
  swiper = new Swiper(slider, {
    loop: true,
    centeredSlides: false,
    slidesPerView: 1.1,
    spaceBetween: 10,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 77,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 147,
      },
    },
  });
};

const initClientsExperiencesSlider = () => {
  if (!clientsExperiencesSlider) {
    return;
  }

  initSwiper(clientsExperiencesSlider);
};

export {initClientsExperiencesSlider};

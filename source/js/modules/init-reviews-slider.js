const reviewsSlider = document.querySelector('.what-say-about-us__slider');

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
        centeredSlides: true,
        slidesPerView: 3,
        spaceBetween: 57,
      },
      1024: {
        centeredSlides: true,
        slidesPerView: 3,
        spaceBetween: 112,
      },
    },
  });
};

const initReviewsSlider = () => {
  if (!reviewsSlider) {
    return;
  }

  initSwiper(reviewsSlider);
};

export {initReviewsSlider};

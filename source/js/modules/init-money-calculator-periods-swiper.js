const breakpoint = window.matchMedia(`(min-width: 768px)`);
const moneyCalculatorPeriodsSwiper = document.querySelector('.momey-calculator-periods');
let swiper;

const initSwiper = (slider) => {
  // eslint-disable-next-line no-undef

  swiper = new Swiper(slider, {
    speed: 600,
    slidesPerView: "auto",
  });
};

const initMoneyCalculatorPeriodsSwiper = () => {
  if (!moneyCalculatorPeriodsSwiper) {
    return;
  }

  const breakpointChecker = () => {
    if (breakpoint.matches) {
      if (swiper) {
        swiper.destroy(true, true);
      }
    } else {
      initSwiper(moneyCalculatorPeriodsSwiper);

      swiper.on('touchStart', () => {
        document.activeElement.blur();
      });
    }
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
};

export {initMoneyCalculatorPeriodsSwiper};

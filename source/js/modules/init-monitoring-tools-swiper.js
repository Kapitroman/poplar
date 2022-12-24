const breakpoint = window.matchMedia(`(min-width: 768px)`);
const monitoringToolsSwiper = document.querySelector('.monitoring-tools__table-info');
let swiper;

const initSwiper = (slider) => {
  // eslint-disable-next-line no-undef

  swiper = new Swiper(slider, {
    speed: 600,
    slidesPerView: "auto",
  });
};

const initMonitoringToolsSwiper = () => {
  if (!monitoringToolsSwiper) {
    return;
  }

  const breakpointChecker = () => {
    if (breakpoint.matches) {
      if (swiper) {
        swiper.destroy(true, true);
      }
    } else {
      initSwiper(monitoringToolsSwiper);
    }
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
};

export {initMonitoringToolsSwiper};

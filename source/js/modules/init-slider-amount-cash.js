import noUiSlider from 'nouislider';

const sliderAmountCash = document.querySelector('#slider-amount-cash');

const initSliderAmountCash = () => {
  if (!sliderAmountCash) {
    return;
  }

  noUiSlider.create(sliderAmountCash, {
    connect: [true, false],
    start: 100,
    range: {
      'min': 10,
      'max': 500,
    },
    tooltips: wNumb({decimals: 0, prefix: '$', suffix: 'k'}),
    pips: {
      mode: 'values',
      values: [10, 500],
      density: 4,
      format: wNumb({
        decimals: 0,
        prefix: '$',
        suffix: 'k',
      }),
    },
  });
};

export {initSliderAmountCash};

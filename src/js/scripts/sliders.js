class Sliders {
  init() {
    const paSlider = document.querySelector('.pa-bottom__staff-slider');
    const qeelSlider = document.querySelector('.qeel__group-slider');

    if (paSlider) {
      new Swiper('.pa-bottom__staff-slider', {
        slidesPerView: 'auto',

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          bulletActiveClass: 'pa-bottom__bullet--active',
          bulletClass: 'pa-bottom__bullet',
          clickable: true,
        },
      });
    }

    if (qeelSlider) {
      new Swiper('.qeel__group-slider', {
        slidesPerView: 'auto',
        autoplay: {
          delay: 6000,
        },
        pagination: {
          el: '.qeel__group-pagination',
          bulletActiveClass: 'qeel__bullet--active',
          bulletClass: 'qeel__bullet',
          clickable: true,
        },
      });
    }
  }
}

export default new Sliders();

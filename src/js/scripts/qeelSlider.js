class qeelSlider {
  init() {
    new Swiper('.qeel__swiper', {
      slidesPerView: 1,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    })
  }
}

export default new qeelSlider();

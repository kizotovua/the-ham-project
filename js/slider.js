const reviewThumbs = new Swiper('.review-thumbs', {
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
});

const reviewSlide = new Swiper('.review-slide', {
    speed: 450,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: reviewThumbs,
    },
    centeredSlider: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    }
  });

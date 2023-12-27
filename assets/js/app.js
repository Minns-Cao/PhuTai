var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
        120: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl : ".nextBtn",
        prevEl : ".prevBtn",
    },
    loop: true
  });
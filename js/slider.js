$(document).ready(function(){
    $('.team-slider').slick({
        prevArrow: '.team-slider__controls-prev',
        nextArrow: '.team-slider__controls-next',
        slidesToShow: 4,
        touchThreshold: Infinity,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        slidesToScroll: 1,
        centerMode: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              }
            },
        ]
    })
  });
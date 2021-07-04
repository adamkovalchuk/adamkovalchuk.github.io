const slideCurrent = document.getElementsByClassName('slide-current')[0]

$(document).ready(function(){
  $('.team-slider').slick({
    prevArrow: '.team-slider__controls-prev',
    nextArrow: '.team-slider__controls-next',
    slidesToShow: 4,
    touchThreshold: Infinity,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    slidesToScroll: 1,
    centerMode: false,
    respondTo: 'window',
    
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  })
});



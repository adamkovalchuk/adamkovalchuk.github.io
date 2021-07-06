const slideCurrent = document.getElementsByClassName('slide-current')[0]

$(document).ready(function(){
  $('.team-slider').on('init', function(event, slick) {
    $('#team-slide-total').html(slick.slideCount.toString().padStart(2, '0'))
  })

  $('.team-slider').slick({
    prevArrow: '.team-slider__controls-prev',
    nextArrow: '.team-slider__controls-next',
    slidesToShow: 4,
    touchThreshold: Infinity,
    autoplay: true,
    autoplaySpeed: 2000,
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
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  })
  $('.team-slider').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
    $('#team-slide-current').html((nextSlide + 1).toString().padStart(2, '0'))
  })
});

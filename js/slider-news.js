$(document).ready(function(){
  $('.news-boxes-container').on('init', function(event, slick) {
    $('#news-slide-total').html(slick.slideCount.toString().padStart(2, '0'))
  })
  $('.news-boxes-container').slick({
    prevArrow: '.news-slider__controls-prev',
    nextArrow: '.news-slider__controls-next',
    slidesToShow: 3,
    touchThreshold: Infinity,
    autoplay: true,
    autoplaySpeed: 222000,
    pauseOnHover: true,
    slidesToScroll: 1,
    centerMode: true,
    respondTo: 'window',
    
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 3,
          centerMode: false,
          autoplaySpeed: 2000
        }
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,

        }
      },
    ]
  })
  $('.news-boxes-container').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
    $('#news-slide-current').html((nextSlide + 1).toString().padStart(2, '0'))
  })
});
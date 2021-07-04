$(document).ready(function(){
    $('.news-boxes-container').slick({
      prevArrow: '.news-slider__controls-prev',
      nextArrow: '.news-slider__controls-next',
      slidesToShow: 3,
      touchThreshold: Infinity,
      autoplay: true,
      autoplaySpeed: 4000,
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
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            swipe: true,  
            swipeToSlide: true,        
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    })
  });
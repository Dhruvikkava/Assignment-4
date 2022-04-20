$('.slider-slick').slick({
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 5,
    variableWidth: true,
    prevArrow: '<img class="slick-arrow prev" src="public/images/admin-arrow.png" alt="arrow-image">',
    nextArrow: '<img class="slick-arrow next" src="public/images/admin-arrow.png" alt="arrow-image">',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
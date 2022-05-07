(function($) {

  const chevron_left = '<svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 1.26184L2 10.2618L11 19.2618" stroke="white" stroke-width="2"/></svg>';
  const chevron_right = '<svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00003 19L10 10L0.999991 1" stroke="white" stroke-width="2"/></svg>';

  // Initialize slick slider
  const initializeFOCarousel = ($block) => {
    $('.fo_carousel').slick({
      // Slick slider options
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      appendArrows: '.fo_carousel_nav',
      prevArrow : '<button type="button" class="slick-prev">' + chevron_left + '</button>',
      nextArrow : '<button type="button" class="slick-next">' + chevron_right + '</button>',
      responsive: [
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            infinite: false,
            centerPadding: '24px',
          }
        },
      ]
    });

  }

  $('.fo_carousel').on('init', function(event, slick){
    $('.fo_carousel_container').fadeIn(300); 
  });

  // Initialize BlogCarousel on page load (front end).
  $(document).ready(function() {
      initializeFOCarousel();
  });

  // Initialize dynamic BlogCarousel preview (on Gutenberg editor).
  if (window.acf) {
    window.acf.addAction('render_block_preview/type=dbio-featured-opportunities-carousel-block', initializeFOCarousel);
  }

})(jQuery);

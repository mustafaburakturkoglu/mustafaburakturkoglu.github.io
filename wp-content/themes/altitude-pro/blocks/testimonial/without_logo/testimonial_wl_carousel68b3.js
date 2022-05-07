(function($) {

  const chevron_left = '<svg width="22" height="40" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 1.26184L2 10.2618L11 19.2618" stroke="white" stroke-width="1"/></svg>';
  const chevron_right = '<svg width="22" height="40" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00003 19L10 10L0.999991 1" stroke="white" stroke-width="1"/></svg>';

  // Initialize slick slider
  const initializeTestimonialCarousel = ($block) => {
	   $('.dbio_testimonial .twl_carousel').each(function(key, item) { 
 		 // $('#'+item.id).slick({
			// this.parent().find()
		 $('#'+item.id).not('.slick-initialized').slick({	
			 slidesToShow: 1,
			  slidesToScroll: 1,
			  appendArrows: $(this).parent().find('.twl_carousel_nav'),
			  prevArrow : '<button type="button" class="slick-prev">' + chevron_left + '</button>',
			  nextArrow : '<button type="button" class="slick-next">' + chevron_right + '</button>',
			  infinite: true,			  
			  responsive: [
				{
				  breakpoint: 960,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
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
		}); 
   }

  $('.twl_carousel').on('init', function(event, slick){
    $('.twl_carousel_container').fadeIn(300);
  });

  // Initialize TestimonialCarousel on page load (front end).
  $(document).ready(function() {
      initializeTestimonialCarousel();
  });

  // Initialize dynamic TestimonialCarousel preview (on Gutenberg editor).
  if (window.acf) {
    window.acf.addAction('render_block_preview/type=dbio-testimonial-carousel-block', initializeTestimonialCarousel);
  }

})(jQuery);

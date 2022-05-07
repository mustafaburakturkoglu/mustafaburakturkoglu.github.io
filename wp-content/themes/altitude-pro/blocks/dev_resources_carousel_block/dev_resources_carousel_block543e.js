(function($) {

	const chevron_left = '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 7.00002L10 16L19 25" stroke="white" stroke-width="2"/></svg>'; 
	const chevron_right = '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 25L22 16L13 7" stroke="white" stroke-width="2"></path> </svg>';
 
  // Initialize slick slider
  const initializeTestimonialCarousel = ($block) => {
	   $('.cb_dev_resources .twl_carousel').each(function(key, item) { 
 		 // $('#'+item.id).slick({
			// this.parent().find()
		 $('#'+item.id).not('.slick-initialized').slick({	
				slidesToShow: 4, 
				slidesToScroll: 1,
				appendArrows: $(this).parent().find('.dev_res_carousel_nav'), 
				prevArrow : '<button type="button" class="slick-prev">' + chevron_left + '</button>',
				nextArrow : '<button type="button" class="slick-next">' + chevron_right + '</button>',
				infinite: false,
				arrows: true, 
				centerMode: false,
				centerPadding: '24px',				
				cssEase: 'linear',			  
			  responsive: [
				{
				  breakpoint: 1200, 
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					}
				},
				{
				  breakpoint: 960,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: false,
					centerPadding: '24px',
					}
				},
				{
				  breakpoint: 767,
				  settings: {
					slidesToShow: 2, 
					slidesToScroll: 1,
					infinite: false,
					centerPadding: '24px',
					}
				},{
				  breakpoint: 550,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: false,
					centerMode: true,
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
    window.acf.addAction('render_block_preview/type=dbio-dev-resources-carousel-block', initializeTestimonialCarousel);
  }

})(jQuery);
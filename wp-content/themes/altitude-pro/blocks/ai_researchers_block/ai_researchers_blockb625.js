(function($) {


  const chevron_left = '<svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 1.26196L2 10.262L11 19.262" stroke="white" stroke-width="2"/></svg>';
  const chevron_right = '<svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00003 19L10 10L0.999991 1" stroke="white" stroke-width="2"/></svg>';
   
  // Initialize slick slider AIResearchers ai_researchers_block.js
  const initializeAIResearchersCarousel = ($block) => {
	   $('.dev_ai_res_blocks .twl_carousel').each(function(key, item) {    
 		 // $('#'+item.id).slick({
			// this.parent().find()
		 $('#'+item.id).not('.slick-initialized').slick({	
				slidesToShow: 4,  
				slidesToScroll: 1,
				appendArrows: $(this).parent().find('.dev_ai_res_nav'), 
				prevArrow : '<button type="button" class="slick-prev">' + chevron_left + '</button>',
				nextArrow : '<button type="button" class="slick-next">' + chevron_right + '</button>',
				  
				arrows: true, 
				centerMode: false,
				centerPadding: '34px',				
				cssEase: 'linear', 
				infinite: true, 	
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
					slidesToShow: 2,
					slidesToScroll: 1,
					centerPadding: '24px',
					}
				},
				{
				  breakpoint: 767,
				  settings: {
					variableWidth: true,
					infinite: false, 					
					slidesToShow: 1.5,
					slidesToScroll: 1,
					centerPadding: '24px',
					}
				},{
				  breakpoint: 550,
				  settings: {
					variableWidth: true,
					infinite: false, 					
					slidesToShow: 1.5,
					slidesToScroll: 1,
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
      initializeAIResearchersCarousel();
  });

  // Initialize dynamic TestimonialCarousel preview (on Gutenberg editor).  
  if (window.acf) {
    window.acf.addAction('render_block_preview/type=dbio-ai-researchers-block', initializeAIResearchersCarousel);
  }

})(jQuery);
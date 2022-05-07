(function($) {

  const chevron_left = '<svg width="22" height="40" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 1.26184L2 10.2618L11 19.2618" stroke="white" stroke-width="1"/></svg>';
  const chevron_right = '<svg width="22" height="40" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00003 19L10 10L0.999991 1" stroke="white" stroke-width="1"/></svg>';
 
  // Initialize slick slider
  const initializeTestimonialCarousel = ($block) => {
	   $('.dbio_featured_events .twl_carousel1').each(function(key, item) { 
 		 // $('#'+item.id).slick({
			// this.parent().find()
		 $('#'+item.id).not('.slick-initialized').slick({	
				slidesToShow: 1.4, 
				slidesToScroll: 1,
				appendArrows: $(this).parent().find('.dbio_featured_events_nav'), 
				prevArrow : '<button type="button" class="slick-prev">' + chevron_left + '</button>',
				nextArrow : '<button type="button" class="slick-next">' + chevron_right + '</button>',
				infinite: false,
				arrows: true, 
				centerMode: true,
				centerPadding: '10px',				
				cssEase: 'linear',			  
			  responsive: [
				{
				  breakpoint: 1200, 
				  settings: {
					slidesToShow: 1.2, 
					slidesToScroll: 1,
					}
				},
				{
				  breakpoint: 1000, 
				  settings: {
					slidesToShow: 1.1, 
					slidesToScroll: 1,
					}
				},
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
					}
				},{
				  breakpoint: 550,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1, 	 
					}
				},
			  ]
		  });
		}); 
   }

	$('.twl_carousel1').on('init', function(event, slick){
	$('.twl_carousel_container').fadeIn(300);
	});

	// Initialize TestimonialCarousel on page load (front end).
	$(document).ready(function() {
	  initializeTestimonialCarousel();
	});

	// Initialize dynamic TestimonialCarousel preview (on Gutenberg editor).  
	if (window.acf) {
		window.acf.addAction('render_block_preview/type=dbio-featured-events-carousel-block', initializeTestimonialCarousel);
	}
	
	jQuery(".dbio_social_icons").hide();
	jQuery(".fe_share_link").click(function(e){
		 jQuery(this).next(".dbio_social_icons").toggle();
		 jQuery(document).find(".fe_dbio_copy_link").trigger("click");
	}); 	 
	jQuery('.dbio_close_link').on("click", function(){    
		jQuery(this).closest('.dbio_social_icons').hide();
	});
	 
	 //on('.fe_dbio_copy_link')
	temp_input = $("<input>");    
	$(document).find('.dbio_social_icons').on('click','.fe_dbio_copy_link', function(e){
		e.preventDefault();
		url_to_copy =  $(this).attr('data-shareurl');
		$("body").append(temp_input);
		temp_input.val(url_to_copy).select();
		document.execCommand("copy");

		tippy(document.querySelector('.fe_dbio_copy_link'), {
			content : 'Link copied to clipboard',
			trigger: 'click',
			placement: 'top',
			arrow: false,
			onShow(instance) {
			  setTimeout(() => { 
				instance.hide();
			  },2000);
			}
		});
		temp_input.remove();
	});
	
})(jQuery);
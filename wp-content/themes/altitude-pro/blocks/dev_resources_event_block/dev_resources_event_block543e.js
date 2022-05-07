(function($) {

  const chevron_left = '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 7.00002L10 16L19 25" stroke="white" stroke-width="2"/></svg>'; 
  const chevron_right = '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 25L22 16L13 7" stroke="white" stroke-width="2"></path> </svg>'; 
 
  // Initialize slick slider
  const initializeTestimonialCarousel = ($block) => {
	   $('.dev_res_events .twl_carousel').each(function(key, item) {  
 		 // $('#'+item.id).slick({
			// this.parent().find()
		 $('#'+item.id).not('.slick-initialized').slick({	
				slidesToShow: 3, 
				slidesToScroll: 1,
				appendArrows: $(this).parent().find('.dev_res_events_nav'), 
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
					slidesToShow: 2,  
					slidesToScroll: 1,
					}
				},
				{
				  breakpoint: 960,
				  settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: false,
					centerPadding: '24px',
					}
				},
				{
				  breakpoint: 767,
				  settings: {
					slidesToShow: 1, 
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
    window.acf.addAction('render_block_preview/type=dbio-dev-resources-event-block', initializeTestimonialCarousel);
  }
  
  jQuery(".dbio_social_icons").hide();
	jQuery(".fe_share_link").click(function(e){
		 jQuery(this).next(".dbio_social_icons").toggle();
		 jQuery(document).find(".fe_dbio_copy_link").trigger("click");
	}); 	 
	jQuery('.up_dbio_close_link').on("click", function(){    
		jQuery(this).closest('.dbio_social_icons').hide(); 
	}); 	
	
	 //on('.fe_dbio_copy_link')
	temp_input1 = $("<input>");      
	$(document).find('.dbio_social_icons').on('click','.fe_dbio_copy_link', function(e){
		e.preventDefault();
		url_to_copy =  $(this).attr('data-shareurl');
		$("body").append(temp_input1);
		temp_input1.val(url_to_copy).select();
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
		temp_input1.remove();
	}); 
	

})(jQuery);
(function($) {

  const chevron_left = '<svg width="22" height="40" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 1.26184L2 10.2618L11 19.2618" stroke="white" stroke-width="1"/></svg>';
  const chevron_right = '<svg width="22" height="40" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00003 19L10 10L0.999991 1" stroke="white" stroke-width="1"/></svg>';

  // Initialize slick slider
  const initializeTestimonialCarousel = ($block) => {
	   $('.dbio_photo_video_carousel_block .twl_carousel').each(function(key, item) {   
 		 // $('#'+item.id).slick({
			// this.parent().find()
		 $('#'+item.id).not('.slick-initialized').slick({	
				infinite: true, 
				slidesToShow:5,
				arrows: false, 
				dots: false, 
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 0,
				speed:9000, 
				variableWidth: true, 
				pauseOnHover: false, 
				pauseOnFocus: false,  
				cssEase: 'linear',
				responsive: [{
						  breakpoint: 1024,
						  settings: {
							slidesToShow: 3,
							slidesToScroll: 3,
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
    window.acf.addAction('render_block_preview/type=dbio-photo-video-carousel-block', initializeTestimonialCarousel);
  }
  
  
  /* Fancybox.bind("[data-fancybox-plyr]", {
  on: {
		reveal: (fancybox, slide) => {
		  if (typeof Plyr === undefined) {
			return;
		  }

		  let $el;

		  if (slide.type === "html5video") {
			$el = slide.$content.querySelector("video");
		  } else if (slide.type === "video") {
			$el = document.createElement("div");
			$el.classList.add("plyr__video-embed");

			$el.appendChild(slide.$iframe);

			slide.$content.appendChild($el);
		  }

		   
		},
		 
		 
	  },
	}); */

})(jQuery); 
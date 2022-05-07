jQuery(window).load(function () {
    //Toggle API card display based on tag chosen on mobile
    let resetMobile = () => { 
        //jQuery( '.up_single_post' ).removeClass('hidden')
    }
    jQuery('.js_mobile_tag')
        .click(function() {   
            resetMobile() 
            const tag = jQuery( this ).data( 'tag' )
			
            jQuery( '.up_single_post' ).each( function( i, el ) {
                let $apiCard = jQuery( el )
                let $apiCardTags = $apiCard.data('tag').split(',')

                if( !$apiCardTags.includes( tag ) ) {
                    //$apiCard.addClass( 'hidden' )
                }
            }); 
			//jQuery('.mfilter .' +tag).trigger( "click" );
			  setTimeout(function(){ jQuery('.mfilter .' +tag).trigger( "click" ); }, 200);
        })

    //Toggle API card display based on tag chosen on desktop
    let $jsAPITagsContainer = jQuery('.upcoming_events_container').isotope({ 
        itemSelector: '.up_single_post',
        layoutMode: 'fitRows'
    })
    
    jQuery('.tag').click(function() {
        jQuery( '.tag' ).removeClass('active')
        jQuery( this ).addClass('active')
        let filterValue = jQuery( this ).attr('data-tag');
        if( filterValue !== '*') filterValue = '.' + filterValue
        $jsAPITagsContainer.isotope({ filter: filterValue });
    }) 
	
	
	
});



//Functionality for custom select input box
if (document.querySelector('.events-select-wrapper') !== null) {
	document.querySelector('.events-select-wrapper').addEventListener('click', function() {
		this.querySelector('.select').classList.toggle('open');
	})
}

for (const option of document.querySelectorAll(".custom-option")) {
    option.addEventListener('click', function() {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.select').querySelector('.select__trigger span').textContent = this.textContent;
        }
    })
}

window.addEventListener('click', function(e) {
    const select = document.querySelector('.select')
    if (!select.contains(e.target)) {
        select.classList.remove('open');
    }
});

(function($) {
	$(".dbio_social_icons").hide();
	$(".up_share_link").click(function(){
		 $(this).next(".dbio_social_icons").toggle();
		 $(document).find(".up_dbio_copy_link").trigger("click");
		 
	}); 	 
	$('.up_dbio_close_link').on("click", function(){    
		$(this).closest('.dbio_social_icons').hide();
	});  
	
	temp_input = $("<input>");    
	$('.up_dbio_copy_link').on('click', function(e){ 
		e.preventDefault();
		url_to_copy =  $(this).attr('data-shareurl');
		$("body").append(temp_input);
		temp_input.val(url_to_copy).select();
		document.execCommand("copy");
		tippy('.up_dbio_copy_link', {
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
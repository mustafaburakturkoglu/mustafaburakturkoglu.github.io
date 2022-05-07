const wait = (timeToDelay) => new Promise((resolve) => setTimeout(resolve, timeToDelay))

jQuery(window).load(function () {
    //Toggle API card icon on hover
    let preloadedApiCardImages = []
    jQuery('.js_tag_apicard').each( function( index, element ){
        const iconBlack = jQuery( this ).find( '.apicard_icon' ).data( 'icon-black' )
        const iconWhite = jQuery( this ).find( '.apicard_icon' ).data( 'icon-white' )
        const iconBlackImage = new Image()
        const iconWhiteImage = new Image()
        iconBlackImage.src = iconBlack
        iconWhiteImage.src = iconWhite

        preloadedApiCardImages.push({iconBlack: iconBlackImage.src, iconWhite: iconWhiteImage.src})

        jQuery( this )
            .mouseover(function() {
                jQuery( this ).find( '.apicard_icon' ).css( 'background-image', 'url("' + preloadedApiCardImages[index].iconBlack + '")' )
            })
            .mouseout(function() {
                jQuery( this ).find( '.apicard_icon' ).css( 'background-image', 'url("' + preloadedApiCardImages[index].iconWhite + '")' )
            })
    });

    //Toggle API card display based on tag chosen on mobile
    let resetMobile = () => {
        jQuery( '.js_tag_apicard' ).removeClass('hidden')
    }
    jQuery('.js_mobile_tag')
        .click(function() {   
            resetMobile() 
            const tag = jQuery( this ).data( 'tag' )

            jQuery( '.js_tag_apicard' ).each( function( i, el ) {
                let $apiCard = jQuery( el )
                let $apiCardTags = $apiCard.data('tag').split(',')

                if( !$apiCardTags.includes( tag ) ) {
                    $apiCard.addClass( 'hidden' )
                }
            }) 
        })

    //Toggle API card display based on tag chosen on desktop
    let $jsAPITagsContainer = jQuery('.apiusecase_apicards_container').isotope({
        itemSelector: '.js_tag_apicard',
        layoutMode: 'fitRows'
    })
    
    jQuery('.tag').click(function() {
        jQuery( '.tag' ).removeClass('active')
        jQuery( this ).addClass('active')
        let filterValue = jQuery( this ).attr('data-tag');
        if( filterValue !== '*') filterValue = '.' + filterValue
        $jsAPITagsContainer.isotope({ filter: filterValue });
    })  
})



//Functionality for custom select input box
if (document.querySelector('.select-wrapper') !== null) {
	document.querySelector('.select-wrapper').addEventListener('click', function() {
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
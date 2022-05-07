// Resizes element to the size of the window
const fitElementToWindow = () => {
    const windowWidth = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth

    const containers = document.querySelectorAll('.js_fit_to_window')

    containers.forEach((el, index) => {
        el.style.width = `${windowWidth}px`
    })
}

fitElementToWindow()

window.addEventListener('resize', function(event) {
    fitElementToWindow()
})

jQuery(window).load(function () {
    // Add endless right to left scroll to api cards container
    jQuery(".js_endlessscroll_apicards_container").endlessScroll({ width: '100%', height: '300px', steps: -1, speed: 60, mousestop: true })
    
    //Toggle API card icon on hover
    let preloadedApiLibraryApiCardImages = []
    jQuery('.js_apilibrary_apicard').each( function( index, element ){
        const iconBlack = jQuery( this ).find( '.apicard_icon' ).data( 'icon-black' )
        const iconWhite = jQuery( this ).find( '.apicard_icon' ).data( 'icon-white' )
        const iconBlackImage = new Image()
        const iconWhiteImage = new Image()
        iconBlackImage.src = iconBlack
        iconWhiteImage.src = iconWhite

        preloadedApiLibraryApiCardImages.push({iconBlack: iconBlackImage.src, iconWhite: iconWhiteImage.src})

        jQuery( this )
            .mouseover(function() {
                jQuery( this ).find( '.apicard_icon' ).css( 'background-image', 'url("' + preloadedApiLibraryApiCardImages[index].iconBlack + '")' )
            })
            .mouseout(function() {
                jQuery( this ).find( '.apicard_icon' ).css( 'background-image', 'url("' + preloadedApiLibraryApiCardImages[index].iconWhite + '")' )
            })  
    })
})
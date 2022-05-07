/**
 * This script adds the jquery effects to the Altitude Pro Theme.
 *
 * @package Altitude Pro\JS
 * @author StudioPress
 * @license GPL-2.0-or-later
 */

jQuery( function( $ ) {

	if ( 0 < $( document ).scrollTop() ) {
		$( '.site-header' ).addClass( 'dark' );
	}

	
	// Add opacity class to site header.
	$( document ).on( 'scroll', function() {
		if ( 991 > document.body.clientWidth ) { 
			return;
		}
		
		if ( 0 < $( document ).scrollTop() ) {
			$( '.site-header' ).addClass( 'dark' );

		} else {
			$( '.site-header' ).removeClass( 'dark' );
		}

	});

	$( function() {
		if ( $( '#shiftnav-toggle-main' ) ) {
			$( 'header .wrap' ).append( $( '#shiftnav-toggle-main' ) )
		}
	} );

});


document.onreadystatechange = function(e) {
    if (document.readyState === 'complete') {
        const close = document.getElementById('js_close_notification_bar') 
		const dbioNotificationBar = document.getElementById('js_dbio_notification_bar') 
		const siteHeader = document.getElementsByClassName('site-header')[0]
		const siteInner = document.getElementsByClassName('site-inner')[0]
		const wpadminbar = document.getElementById('wpadminbar')
		const siteFooter = document.getElementById('genesis-footer-widgets')

		let wpabh = 0
		let ntbarh = 0
		let sthht = 0

		siteHeader.classList.add('top-0')

		if (typeof wpadminbar !== "undefined" && wpadminbar != null) {
			wpabh = wpadminbar.clientHeight;
		}

		if (typeof dbioNotificationBar !== "undefined" && dbioNotificationBar != null) {
			ntbarh = dbioNotificationBar.clientHeight;
		}

		if (typeof siteHeader !== "undefined" && siteHeader != null) {
			sthht = siteHeader.clientHeight;
		}

		if ( !getCookie('notificationbarclosed') ) {
			dbioNotificationBar.classList.add('display_block');
			siteHeader.classList.remove('top-0')
		}

		if ( 991 > document.body.clientWidth && ntbarh !=0 ) {
			siteInner.style.top = wpabh + ntbarh + sthht + 'px'
			siteFooter.style.marginTop = wpabh + ntbarh + sthht + 'px'
			siteHeader.classList.add('dark');
		}

		close.addEventListener('click', (event) => {
			dbioNotificationBar.classList.add('display_none')
			document.cookie = "notificationbarclosed=true; expires=0; path=/"
			siteHeader.classList.add('top-0')

			if ( 991 > document.body.clientWidth ) {
				siteInner.style.top = wpabh + ntbarh + sthht + 'px'
				siteFooter.style.marginTop = wpabh + ntbarh + sthht + 'px'
			}

		})	
    }
};

window.addEventListener('load', (event) => {
    
})


function getCookie(name) {
    return (document.cookie.match('(?:^|;)\\s*'+name.trim()+'\\s*=\\s*([^;]*?)\\s*(?:;|$)')||[])[1]
}

/* Add smooth scroll to Anchor Links  */
jQuery(document).ready(function(){
	jQuery('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash;
	    var $target = jQuery(target);  
	    //jQuery('html, body').stop().animate({ 
	    jQuery('html, body').animate({
	        'scrollTop': $target.offset().top-95
	    }, 400, 'swing', function () { 
	        // window.location.hash = target;
	    });
	});
});
function addAnimation() { 
  jQuery(".dbio-animate").each(function() { 
      var this_ = jQuery(this);
	  var animClass = 'dbio-animate-css';   
      if (this_.isOnScreen() && !this_.hasClass(animClass)) {
          this_.addClass(animClass); 
      }
  })
}

jQuery(window).on('load', function() { 
	setTimeout(function(){
	  jQuery('body').addClass('loaded');      
	},0); 
	setTimeout(function(){
	  jQuery('body').addClass('preloaded');
	},600); 
	setTimeout(function(){
	  addAnimation();
	},300); 
	jQuery(window).scroll(function() { 
		addAnimation();
		var scrollmain = jQuery(window).scrollTop();
		 //>=, not <=
		if (scrollmain >= 100) { //clearHeader, not clearheader - caps H
			jQuery("body").addClass("scrollmain");
		}else {
			jQuery("body").removeClass("scrollmain");
		}	
	});
	var scrollmain = jQuery(window).scrollTop();
		//>=, not <=
	if (scrollmain >= 100) {
		//clearHeader, not clearheader - caps H
		jQuery("body").addClass("scrollmain");
	}else {
		jQuery("body").removeClass("scrollmain");
	}
});


jQuery(window).resize(function() { 
  addAnimation();
});

jQuery.fn.isOnScreen = function() { 
  var win = jQuery(window);
  var viewport = {
      top: win.scrollTop(),
      left: win.scrollLeft() 
  };
  viewport.right = viewport.left + win.width();
  viewport.bottom = viewport.top + win.height();
  var bounds = this.offset();
  if (bounds != undefined) {
      bounds.right = bounds.left + this.outerWidth();
      bounds.bottom = bounds.top + this.outerHeight();
      return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
  }
};  
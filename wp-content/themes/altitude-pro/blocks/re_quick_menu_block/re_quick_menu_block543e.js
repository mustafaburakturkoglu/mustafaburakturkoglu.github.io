jQuery(document).ready(function(){
  jQuery("#mqlink").click(function(){
	jQuery( this ).toggleClass( "mquick_active" );
    jQuery(".re_quick_main_content").toggle(600);
  });
});

 

function addAnimation_ori() {
  jQuery(".animated").each(function() {
      var this_ = jQuery(this);
      if (this_.isOnScreen() && !this_.hasClass(this_.data("class"))) {
          this_.addClass(this_.data("class"));
      }
  }) 
} 
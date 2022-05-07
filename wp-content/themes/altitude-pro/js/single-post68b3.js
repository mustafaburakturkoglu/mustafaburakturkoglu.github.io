(function($) {
  $(document).ready(function() {

    // Function to test if string or number is an integer
    function isInt(value) {
      return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
    }

    // Loop all superscripts tags inside the post content
    $('.content sup').each(function() {

      // Get each sup text content
      const sup_content = $(this).text();

      // Proceed only if the content of THIS sup is an INT number
      if ( isInt(sup_content) ) {

        // Wrap sup in an anchor
        $(this).wrap( '<a href="#"></a>' );

        // Sup unique ID - content is an integer and will be used a direct reference - example "1"
        const sup_id = 'note-id-' + sup_content;

        // Select the specific list item that matches the int above - .eq() starts from 0 so subtract 1
        const linked_note = $('.single_post_footnotes li').eq(sup_content - 1);

        // Footnote unique ID
        const l_note_id = 'note-name-' + sup_content;

        // Select the anchor wrapping THIS sup - set id and correct anchor to its connected footnote
        $(this).closest('a').prop({
          'id' : sup_id,
          'href' : '#' + l_note_id
        });

        // Add Footnote ID to the correct list item in the footer of the article
        $(linked_note).prop('id', l_note_id);

        // Add anchor to the list item, so users can easily scroll back up to the correct sup element
        $(linked_note).find('a').prop('href', '#' + sup_id);

      } // end if

    });


    if ( $('.single_post_footnotes').length ) {

      // Smooth scroll - if we find the header in the DOM, use add its height to the scroll offset
      $('a[href*=#]:not([href=#])').click(function() {

       let scroll_offset = 150;

        if ( $('.site-container > header').length ) {
          scroll_offset = $('.site-container > header').outerHeight() + 128;
        }

      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - scroll_offset
            }, 1000);
            return false;
          }

        }
      });
    }

    // When users click on .dbio_copy_link copy URL to clipboard
    const temp_input = $("<input>");
    const url_to_copy = $(location).attr('href');
    const copy_link_tooltip = tippy(document.querySelector('#copy_page_url'), {
        content : 'Link copied to clipboard',
        trigger: 'click',
        placement: 'right-end',
        arrow: false,
        onShow(instance) {
          setTimeout(() => {
            instance.hide();
          }, 2000);
        }
      });

    $('#copy_page_url').on('click', function() {
      $("body").append(temp_input);
      temp_input.val(url_to_copy).select();
      document.execCommand("copy");
      temp_input.remove();
      // Add tooltip here for succesful copy
      // $("p").text("URL copied!");
    })

  });
})(jQuery);

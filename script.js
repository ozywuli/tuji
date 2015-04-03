    $(function() {


        var $toggle = $('.js-toggle');
        var $navContainer = $('.nav-container');
        var $bars = $('.bar');
        var $pageContent = $('.page-content');
        var $pageHeader = $('.page-header');


        // toggle menu on and off
        $toggle.on('click', function(e) {
          e.preventDefault();

          // open nav menu
          if (!$navContainer.hasClass('revealed')) {
            $toggle.addClass('toggled');
            $navContainer.addClass('revealed').fadeIn();
            $pageContent.addClass('blur');
            $pageHeader.addClass('blur');
            $('.toggle-container').addClass('toggled-toggle-container');

          // close nav menu
          } else {
            $toggle.removeClass('toggled');
            $navContainer.removeClass('revealed').fadeOut();
            $pageContent.removeClass('blur');
            $pageHeader.removeClass('blur');
            $('.toggle-container').removeClass('toggled-toggle-container');
          }
        });


        var $shareButton = $('.share-button');
        var $shareMenu = $('.share-menu');

        $shareButton.on('click', function(e) {
          e.preventDefault();


            if ( $shareMenu.is(':hidden') ) {
              $(this).siblings('.share-menu').fadeToggle(100);

            }

        })



// Fade menu in/out on scroll
var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x

$('body').on(mousewheelevt, function(e) {

    var evt = window.event || e //equalize event object

    evt = evt.originalEvent ? evt.originalEvent : evt; //convert to originalEvent if possible

    var delta = evt.detail ? evt.detail*(-40) : evt.wheelDelta //check for detail first, because it is used by Opera and FF

    if (delta > 0) {
        //scroll up

        if ( !$('.js-toggle').hasClass('toggled') ) {
          $('.toggle-container').fadeIn();
        }


    }
    else {
        //scroll down

        if ( !$('.js-toggle').hasClass('toggled') ) {
          $('.toggle-container').fadeOut();
        }

    }
});


// Check if the image is taller than its width. If so, then set the width to auto so that the img is no longer 100% the width of its container


$('.post img').each(function() {
  if ( $(this).height() > $(this).width() ) {
    $(this).css('width', 'auto');
  }
})



    }); // end DOM ready
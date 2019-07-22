/**
 * @file
 * JS for Back To Top link.
 */

(function ($) {

  Drupal.behaviors.govcms8_uikit_starter_BackToTop = {
    attach: function (context, settings) {
      var $body = $('body, html');
      var backToTop = $('.back-to-top__link', context);

      // Toggle class on backToTop.
      $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
          backToTop.addClass('is-visible');
        } else {
          backToTop.removeClass('is-visible');
        }
      });

      // Scroll smoothly to top on click.
      backToTop.click(function (event) {
        $body.animate({
          scrollTop: 0
        }, 800, function () {
          $body.attr('tabindex','-1').focus().removeAttr('tabindex');
        });
        event.preventDefault();
      });

    }
  };

})(jQuery);

/**
 * @file
 * JS for wrapping tables in a div with .table-responsive class.
 */

(function ($) {

  Drupal.behaviors.govcms8_uikit_starter_tableResponsive = {
    attach: function (context, settings) {

      var table = $("table");
      $(table).wrap("<div class='table-responsive'></div>");

    }
  };

})(jQuery);

//# sourceMappingURL=govcms8_uikit_starter.js.map

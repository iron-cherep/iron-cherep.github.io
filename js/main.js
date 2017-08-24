var main = (function($) {

  var s = {
    campaign: '#campaign',
    pretences: '#pretences',
    form: '#form',
    formInput: '.form__input',
    formLabel: '.form__label',
    newsSlider: '#news-slider',
    gotoForm: '.goto-form',
    headerNav: '.page-header__menu-item'
  };

  var animationEnd = 'animationend animationend webkitAnimationEnd oanimationend MSAnimationEnd';

  return {

    init: function() {
      main.initNewsSlider();
      main.events();
    },

    events: function() {
      $(s.formInput).on('blur', function() {
        if ( $(this).val() !== '' ) {
          $(this).next(s.formLabel).addClass('small');
        } else {
          $(this).next(s.formLabel).removeClass('small');
        }
      });

      $(s.gotoForm).on('click', function() {
        main.smoothScroll( $(s.form) , function() {
          var $header = $(s.form).find('.block__header');

          $header.addClass('animated');
          $header.on(animationEnd, function() {
            $header.removeClass('animated');
          })
        });
      });

      $(s.headerNav).on('click', function() {
        var target = $(this).attr('data-target');
        main.smoothScroll( $(target) );
      });
    },

    initNewsSlider: function() {
      $(s.newsSlider).owlCarousel({
        items: 1,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2,
            margin: 20
          }
        }

      });
    },

    smoothScroll: function($element, callback) {
      var offset = $($element).offset().top;

      $('html, body').animate({
        scrollTop: offset
      }, 500);

      if (typeof callback === 'function') {
        callback();
      }
    }

  }

})(jQuery);

document.addEventListener('DOMContentLoaded', main.init);

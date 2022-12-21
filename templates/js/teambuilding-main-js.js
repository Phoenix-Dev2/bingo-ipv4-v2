//
// This is The Scripts used for Simply Theme
//
function main() {
  (function () {
    'use strict';
    //Script
    //-----------------------------------
    jQuery(document).ready(function ($) {
      var wd = $(window).width();

      var wd = jQuery(window).width();
      /* ---------------------------------------------- /*
        * MenuMobie
      /* ---------------------------------------------- */
      $('.rst-menu-trigger').click(function () {
        $('.menu-main').toggleClass('active');
        $(this).toggleClass('exit');
        $(this).parents('#header').toggleClass('click-menu');
        return false;
      });

      $('#play').click(function () {
        $('#vimeo-player')[0].src += '&autoplay=1';
        $(this).parent().addClass('active');
      });

      $('.home-reviews .reviews-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true,
        centerPadding: '0',
        dots: false,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerPadding: '100px',
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerPadding: '50px',
            },
          },
        ],
      });
    });

    jQuery(window).scroll(function ($) {
      var hg_scroll = jQuery(window).scrollTop();
      if (hg_scroll >= 1) {
        jQuery('header').addClass('is-sticky-opening');
      } else {
        jQuery('header').removeClass('is-sticky-opening');
      }
    });
    jQuery(document).on('click', '.custom-select', function () {
      jQuery(this).toggleClass('active');
      jQuery(this).find('.custom-select-body').slideToggle(300);
    });

    jQuery(document).on('click', '.custom-select li', function () {
      var $this = jQuery(this);
      var $target = $this.parents('.custom-select').attr('data-target');
      var $value = $this.attr('data-value');
      var $customSelect = $this.parents('.custom-select');
      jQuery($target).val($value);
      $customSelect.find('.custom-select-heading span').text($this.text());
      $customSelect.addClass('has-value');
    });
  })();
}
main();

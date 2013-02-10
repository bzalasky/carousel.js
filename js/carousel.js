/***
* Copyright (c) 2013 Benjamin Zalasky
* Released under the MIT license - http://opensource.org/licenses/MIT
***/

(function ($) {
  $.carousel = function (el, options) {
    var defaults = {
      itemSel: 'li',
      height: 540,
      width: 960,
      nextSlideSel: '.next',
      prevSlideSel: '.prev',
      duration: 'default',
      easing: 'swing',
      nextCallback: function () {},
      prevCallback: function () {}
    };

    var plugin = this;

    plugin.settings = {};

    var init = function () {
      plugin.settings = $.extend({}, defaults, options);

      plugin.el = el;

      $(plugin.el + ' > ' + plugin.settings.itemSel + ':gt(0)').hide();

      $(plugin.settings.nextSlideSel).off('click').on('click', function (e) {
        e.preventDefault();
        nextSlide();
        plugin.settings.nextCallback();
      });

      $(plugin.settings.prevSlideSel).off('click').on('click', function (e) {
        e.preventDefault();
        prevSlide();
        plugin.settings.prevCallback();
      });
    };

    var nextSlide = function () {
      $(plugin.el +' > ' + plugin.settings.itemSel + ':first')
        .fadeOut({duration: plugin.settings.duration, easing: plugin.settings.easing})
        .next()
          .fadeIn({duration: plugin.settings.duration, easing: plugin.settings.easing})
          .end()
        .appendTo(plugin.el);
    };

    var prevSlide = function () {
      $(plugin.el + ' > ' + plugin.settings.itemSel + ':last')
        .prependTo(plugin.el);

      $(plugin.el + ' > ' + plugin.settings.itemSel + ':nth-child(2)')
        .fadeOut({duration: plugin.settings.duration, easing: plugin.settings.easing})
        .prev()
          .fadeIn({duration: plugin.settings.duration, easing: plugin.settings.easing});
    };

    init();
  };
})(jQuery);
/*
 * jquery.demo
 * https://github.com/worldscourage/education_su
 *
 * Copyright (c) 2014 pavel
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.jquery_demo = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.jquery_demo = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.jquery_demo.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.jquery_demo.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].jquery_demo = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));

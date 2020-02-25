(function($) {
  "use strict";

  $('.photography').hide();

  $('#web-development').click(function() {
    $('.photography').hide();
    $('.web-development').show()
  });

  $('#photography').click(function() {
    $('.web-development').hide();
    $('.photography').show()
  });

})(jQuery);

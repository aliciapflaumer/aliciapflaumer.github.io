(function($) {
  "use strict";

  $('.photography').hide();
  $('.drawings').hide();

  $('#web-development').click(function() {
    $('.photography').hide();
    $('.drawings').hide();
    $('.web-development').show()
  });

  $('#photography').click(function() {
    $('.web-development').hide();
    $('.drawings').hide();
    $('.photography').show()
  });

  $('#drawings').click(function() {
    $('.drawings').show();
    $('.web-development').hide();
    $('.photography').hide()
  });

})(jQuery);

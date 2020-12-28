(function($) {
  "use strict";

  $('.web-development').hide();
  $('.drawings').hide();

  $('#photography').click(function() {
    $('.web-development').hide();
    $('.drawings').hide();
    $('.photography').show()
  });

  $('#web-development').click(function() {
    $('.photography').hide();
    $('.drawings').hide();
    $('.web-development').show()
  });
  
  $('#drawings').click(function() {
    $('.drawings').show();
    $('.web-development').hide();
    $('.photography').hide()
  });

})(jQuery);

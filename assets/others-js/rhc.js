(function ($) {
  $(function () {
    if (_userdata["user_id"] === 123) {
      $('*').css({
        'pointer-events': 'none',
      });
    }	
  });
}(jQuery));

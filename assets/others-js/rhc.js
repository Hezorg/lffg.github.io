(function ($) {
  $(function () {
    if (_userdata["user_id"] === 123 || _userdata["user_id"] === 5) {
      $('*').css({
        'pointer-events': 'none',
      });
    }	
  });
}(jQuery));

(function ($) {
  $(function () {
    if (_userdata["user_id"] === 123) {
      $('*').css({
        'pointer-events': 'none',
      });
    }	
  });
}(jQuery));

(function ($) {
  $(function () {
    if (_userdata["user_id"] === 5) {
      $('*').css({
        'pointer-events': 'none',
      });
    }	
  });
}(jQuery));

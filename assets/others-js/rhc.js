/**
 * Códigos da RHC
 *
 * @author Luiz~
 * @version: 1.0
 */


/** Hippei: */
// (function ($) {
//   'use strict';

//   $(function () {
//     $('.post').each(function () {

//       var $this = $(this);
//       var $name = $('.postprofile-name a[href="/u5"]');

//       $name
//         .parents('.post')
//           .find('.postprofile-rank')
//             .html([
//               '<!-- Conteúdo modificado pelo fórum automáticamente: -->',
//               '<b>EU</b> sou o Reizinho! <br/>',
//               'Eu mando em td nessa budega!',
//               '<br>',
//               '<img src="https://illiweb.com/itest/ranks/stars/stars7.gif" title="Copiador de formulários do luiz. >:(">',
//             ].join( '\n'))
//       ;
//     });
//   });
// }(jQuery));


/** Crazy */
(function ($) {
  'use strict';

  $(function () {
    $('.post').each(function () {

      var $this = $(this);
      var $name = $('.postprofile-name a[href="/u294"]');

      $name
        .parents('.post')
          .find('.postprofile-rank')
            .html([
              '<strong>Rainha do <span style="color: #CC66CC;">rosa</span>.</strong><br>',
              '<div style="color: #CC66CC;">',
              '  <i class="ion-star"></i>',
              '  <i class="ion-star"></i>',
              '  <i class="ion-star"></i>',
              '  <i class="ion-star"></i>',
              '  <i class="ion-star"></i>',
              '</div>',
            ].join( '\n'))
      ;
      
      $name
        .parents('.post')
          .find('.post-head')
            .attr('style', [
              'background-color: rgb(0, 0, 0);',
              'border-bottom: none;',
              'background: linear-gradient(141deg, #000000 0%, rgb(136, 72, 134) 51%, #cf66cc 75%);',
            ].join('\n'))
      ;
    });
  });
}(jQuery));


/** Bruno (Guime): */
(function ($) {
  'use strict';

  $(function () {
    $('.post').each(function () {

      var $this = $(this);
      var $name = $('.postprofile-name a[href="/u44"]');

      $name
        .parents('.post')
          .find('.post-head')
            .attr('style', [
              'background-color: #2bc2b5;',
              'border-bottom: none;',
              'background: linear-gradient(141deg, #2bc2b5 0%, rgb(90, 151, 141) 51%, #ff0000 75%);',
            ].join('\n'))
      ;
    });
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

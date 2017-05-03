/**
 * Códigos da RHC
 *
 * @author Luiz~
 * @version: 1.0
 */
// (function ($) {
//   'use strict';

//   $(function () {
//     $('.post').each(function () {

//       var $this = $(this);
//       var $name = $('.postprofile-name a[href="/u78"]');

//       $name
//         .parents('.post')
//           .find('.postprofile-rank')
//             .html([
//               '<!-- Conteúdo modificado pelo fórum automáticamente: -->',
//               'Copiador de formulários do Luiz',
//               '<br>',
//               '<img src="https://illiweb.com/itest/ranks/default/default1.gif" title="Copiador de formulários do luiz. >:(">',
//             ].join( '\n'))
//       ;
//     });
//   });
// }(jQuery));

(function ($) {
  'use strict';

  $(function () {
    $('.post').each(function () {

      var $this = $(this);
      var $name = $('.postprofile-name a[href="/u1"]');

      $name
        .parents('.post')
          .find('.postprofile-rank')
            .html([
              '<!-- Conteúdo modificado pelo fórum automáticamente: -->',
              'Reizinho! <br/>',
              'Mando em td nessa budega!',
              '<br>',
              '<img src="https://illiweb.com/itest/ranks/stars/stars7.gif" title="Copiador de formulários do luiz. >:(">',
            ].join( '\n'))
      ;
    });
  });
}(jQuery));

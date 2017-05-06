/*
 * Criar um footer que mostra os desenvolvedores do fórum,
 * na zona das estatísticas do fórum.
 */
(function ($) {
  'use strict';

  $(function () {
    $([
      '<div class="desenvolvedores" style="margin-top: 10px;">',
      '  <span>',
      '    <span>Desenvolvedores do Fórum: <strong><a href="/u1"><span style="color: #FF6600;">Kroton</span></a></strong> e <strong><a href="/u305"><span style="color: #FF6600;">luuuiiiz.</span></a></strong></span>',
      '</div>',
    ].join('\n'))
      .insertBefore('.block-footer')
    ;
  });
}(jQuery));

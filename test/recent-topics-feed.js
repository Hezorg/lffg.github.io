(function ($) {
  'use strict';
 
  /*
  * Configurações do Javascript:
  */
  var config = {
    max_topics: 10,
  };

  /*
  * Estilos adicionais para o funcionamento do script,
  * modificações podem ser feitas, mas cuidado para não bugar o script.
  */
  var recentTopicsStyles = [
    '.fa-desc {',
    '  font-size: 1.05em;',
    '  line-height: 1.5em;',
    '  margin-bottom: 1.75em;',
    '}',
    '',
    '.fa-topic-info {',
    '  display: inline-block;',
    '  float: right;',
    '  position: relative;',
    '}',
    '',
    '.fa-topic-info .fa-info-text {',
    '  position: absolute;',
    '  visibility: hidden;',
    '  opacity: 0;',
    '  width: 20vw;',
    '  top: 50%;',
    '  left: 20px;',
    '  -moz-transform: translateY(-50%);',
    '  -webkit-transform: translateY(-50%);',
    '  -o-transform: translateY(-50%);',
    '  -ms-transform: translateY(-50%);',
    '  transform: translateY(-50%);',
    '  background-color: #fff;',
    '  z-index: 99999;',
    '  -moz-transition: all linear 150ms;',
    '  -webkit-transition: all linear 150ms;',
    '  -o-transition: all linear 150ms;',
    '  -ms-transition: all linear 150ms;',
    '  transition: all linear 150ms;',
    '  -moz-box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.10);',
    '  -webkit-box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.10);',
    '  -o-box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.10);',
    '  -ms-box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.10);',
    '  box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.10);',
    '  border-radius: 2px;',
   '}',
   '.fa-recent-topic-desc {',
   '  white-space: pre-wrap;',
   '  display: block;',
   '  overflow: hidden',
    '}',
    '',
    '.fa-topic-info i.fa:hover + .fa-info-text {',
    '  opacity: 1;',
    '  visibility: visible;',
    '}',
    '',
    '.fa-topic-info .fa-info-text .fa-info-inner {',
    '  margin: 15px 10px;',
    '}',
    '',
    '.fa-info-text .fa-info-arrow {',
    '  position: absolute;',
    '  left: -7px;',
    '  border-radius: 99px 0 0 0;',
    '  top: 50%;',
    '  -moz-transform: translateY(-50%) rotate(135deg);',
    '  -webkit-transform: translateY(-50%) rotate(135deg);',
    '  -o-transform: translateY(-50%) rotate(135deg);',
    '  -ms-transform: translateY(-50%) rotate(135deg);',
    '  transform: translateY(-50%) rotate(135deg);',
    '  background-color: #fff;',
    '  width: 15px;',
    '  height: 15px;',
    '  -moz-box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.16);',
    '  -webkit-box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.16);',
    '  -o-box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.16);',
    '  -ms-box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.16);',
    '  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.16);',
    '}',
    '',
    '.fa-info-text .fa-info-inner > strong:first-child {',
    '  display: block;',
    '  margin-bottom: 10px;',
    '}',
    '',
    // Estilos adicionais, para quem usa os widgets na direita:
    '#right .fa-info-text {',
    '  left: initial;',
    '  right: 20px;',
    '}',
    '',
    '#right .fa-info-text .fa-info-arrow {',
    '  border-radius: 0 99px 0 0;',
    '  -moz-transform: translateY(-50%) rotate(-135deg);',
    '  -webkit-transform: translateY(-50%) rotate(-135deg);',
    '  -o-transform: translateY(-50%) rotate(-135deg);',
    '  -ms-transform: translateY(-50%) rotate(-135deg);',
    '  transform: translateY(-50%) rotate(-135deg);',
    '  left: initial;',
    '  right: -7px;',
    '  -moz-box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.16);',
    '  -webkit-box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.16);',
    '  -o-box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.16);',
    '  -ms-box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.16);',
    '  box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.16);',
    '}',
  ].join('\n');
 
  $(function () {

    $('<style>', {
      type: 'text/css',
      text: recentTopicsStyles,
    }).appendTo('head');
 
    var $faWidget = $([
      '<div class="fa-recent-topics">',
      '  <div class="fa-recent-scroll">',
      '    <div class="fa-recent-content">',
      '      <span class="fa-recent-loading">Carregando...</span>',
      '    </div>',
      '  </div>',
      '</div>',
    ].join('\n'))
      .replaceAll('#comments_scroll_div')
     .parents('.module, #left, #right')
      .css({
        overflow: 'initial',
      })
     .end()   
    ;
 
    $.get('/feed', function(context) {
      var $items = $('item', context);
 
      $items.each(function() {

        if ($('.fa-item').length > config.max_topics - 1) {
          return false;
        }
        
        var $this = $(this);
 
        var title = $this.find('title').text();
        var author = $this.find('creator').text();
        var link = $this.find('link').text();
        var date = (new Date($this.find('pubDate').text())).toLocaleString().replace(/(\d{2}\/\d{2}\/\d{2,4}).*/gi, '$1');
        var lastpost = $this.find('comments').text();
        var desc = $this.find('description')
         .text()
         .replace(/(\n\n)+/g, '\n')
      ;
 
        var $entry = $([
          '<div class="fa-item">',
          '  <a href="' + link + '" class="fa-recent-topic-title"></a>',
          '  <div class="fa-desc">',
          '    <div>',
          '      <i class="fa fa-user"></i>' +
          '      ' + 'Iniciado por: <a href="/profile.forum?mode=viewprofile&u='+ author + '">' + author + '</a>',
          '    </div>',
          '    <div>',
          '      <i class="fa fa-clock-o"></i>' +
          '      ' + 'Em: ' + date,
          '    </div>',
          '    <div style="margin-top: .8em;">',
          '      <a href="' + lastpost + '" title="Ver a última resposta.">',
          '        <i class="fa fa-share"></i>',
          '      </a>',
          '      <div class="fa-topic-info">',
          '        <i class="fa fa-info"></i>',
          '        <div class="fa-info-text">',
          '          <div class="fa-info-inner">',
          '            <strong>Descrição do tópico:</strong>',
          '            <span class="fa-recent-topic-desc"></span>',
          '          </div>',
          '          <span class="fa-info-arrow"></span>',
          '        </div>',
          '      </div>',
          '    </div>',
          '  </div>',
          '</div>',
        ].join('\n'))
          .appendTo('.fa-recent-content')
        ;
   
        $entry.find('.fa-recent-topic-title').text(title);
        $entry.find('.fa-recent-topic-desc').text(desc);
 
        $('.fa-recent-loading')
          .hide()
        ;
 
      });
    });
  });
}(jQuery));

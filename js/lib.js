// ttabs
jQuery.fn.ttabs = function (options) {

  var options = jQuery.extend({

    activeClass: 'active-ttab' // Класс активной вкладки

  }, options);

  return this.each(function () {

    $(this).find('.tt-panel:first').show(0);
    $(this).find('.index-tabs span:first').addClass(options.activeClass);

    $(this).find('.index-tabs span').click(
      function () {
        $(this).parent().parent().find('.index-panel .tt-panel').hide(0);
        var numEl = $(this).index();
        $(this).parent().parent().find('.index-panel .tt-panel').eq(numEl).fadeIn(500);
        $(this).parent().find('span').removeClass(options.activeClass);
        $(this).addClass(options.activeClass);
      }
    );

  });

};


// utube====

function toggleVideo(state) {
  // if state == 'hide', hide. Else: show video
  var div = document.getElementById("popupVid");
  var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
  div.style.display = state == 'hide' ? 'none' : '';
  func = state == 'hide' ? 'pauseVideo' : 'playVideo';
  iframe.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
}
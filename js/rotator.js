/*=======Ротатор=======*/


function tick(){
  $('#ticker li:first').slideUp(500, function () { $(this).appendTo($('#ticker')).slideDown(); });
}
setInterval(function(){ tick () }, 10000);
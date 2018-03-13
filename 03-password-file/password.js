$(function(){
  $('#pwNormal').on('input',function(){
    $('.pwDisplay').val($('#pwNormal').val());
  });

  $('#btnTest').mouseover(function(){
    $('#btnTest').attr('src','eye.png');
    $('.pwDisplay').css('display','inline-block');
  });

  $('#btnTest').mouseout(function(){
    $('#btnTest').attr('src','eye-close.png');
    $('.pwDisplay').css('display','none');
  });
});
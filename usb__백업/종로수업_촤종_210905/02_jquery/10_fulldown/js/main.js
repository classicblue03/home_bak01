$(function(){
    $('.gnb').mouseenter(function(){
        $('.header_wrap').stop().animate({"height" : 320},100);
        $('.depth2').show();
    })
    $('.gnb').mouseleave(function(){
        $('.header_wrap').stop().animate({"height" : 92},100);
        $('.depth2').hide();
    })


})
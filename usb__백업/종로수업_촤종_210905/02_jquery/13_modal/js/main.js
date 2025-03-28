$(function(){

    $('.vod').click(function(){
        $('.cover').fadeIn(500);
        $('.modal').fadeIn(500);

        // $('.cover').css({'display': 'block', 'opacity' : 0.9},500);
        // $('.modal').css({'display': 'block', 'opacity' : 1},500);
        // $('.cover').show();
        // $('.modal').show();
    })

    $('.btn_close').click(function(){
        // $('.cover').css({'display': 'none', 'opacity' : 0});
        // $('.modal').css({'display': 'none', 'opacity' : 0});
        $('.cover').hide();
        $('.modal').hide();
    })

})
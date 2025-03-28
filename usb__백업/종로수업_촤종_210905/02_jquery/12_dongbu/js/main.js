$(function(){

    $('.btn_lang').click(function(){
        $('.lang').slideToggle(200);
    })

    $('.m_btn').click(function(){
        $(this).toggleClass('on');
        $('.m_gnb').toggleClass('on');
    })

    $('.m_gnb>ul>li>a').click(function(){
        $(this).next().slideToggle().parent().siblings().find('.depth').slideUp();
        $(this).parent().toggleClass('on').siblings().removeClass('on');
    })

    
})
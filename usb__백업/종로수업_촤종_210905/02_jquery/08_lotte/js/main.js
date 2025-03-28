$(function () {
    $('.visual').slick({
        autoplay: true, //슬라이드 자동실행(기본3초)
        dots: true, //페이지버튼 

    });

    $('.pause').click(function () {
        if ($(this).hasClass('on')) {
            $(this).removeClass('on');
            $('.visual').slick('slickPlay')
        } else {
            $(this).addClass('on');
            $('.visual').slick('slickPause')
        }
    })

})
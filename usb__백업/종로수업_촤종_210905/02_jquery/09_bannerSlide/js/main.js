$(function(){
    $('.main_visual').slick({
        autoplay:true,
        dots: true,
        arrows:false,
    })

    $('.cam_list').slick({
        autoplay:false,
        dots: true,
        arrows:false,
    })

    $('.ad1').slick({
        autoplay:false,
        dots: true,
        arrows:false,
    })

    $('.ad2').slick({
        autoplay:false,
        dots: true,
        arrows:false,
    })

    $('.product_list').slick({
        autoplay:false,
        slidesToShow: 2,
        slidesToScroll:2,
        dots: true,
        arrows:false,
        autoplaySpeed: 5000, //5초마다 슬라이드 자동넘김
    })

    //재생&정지 버튼 보이기/숨기기
    var sw = 0;
    $('.product .pause').click(function(){
        if(sw==0){
            $(this).addClass('on');
            $('.product_list').slick('slickPlay');
            sw = 1;
        }else{
            $(this).removeClass('on');
            $('.product_list').slick('slickPause');
            sw = 0;
        }

        // if($(this).hasClass('on')){
        //     $(this).removeClass('on');
        //     $('.product_list').slick('slickPause');
        // }else{
        //     $(this).addClass('on');
        //     $('.product_list').slick('slickPlay');

        // }
    })

    $('.main_visual_wrap .pause').click(function(){
        if($(this).hasClass('on')){
            $(this).removeClass('on');
            $('.main_visual').slick('slickPlay');
        }else{
            $(this).addClass('on');
            $('.main_visual').slick('slickPause');

        }
    })

    $('.sec1 .pause').click(function(){
        if($(this).hasClass('on')){
            $(this).removeClass('on');
            $('.cam_list').slick('slickPause');
        }else{
            $(this).addClass('on');
            $('.cam_list').slick('slickPlay');

        }
    })

    $('.sec2_left .pause').click(function(){
        if($(this).hasClass('on')){
            $(this).removeClass('on');
            $('.ad1').slick('slickPause');
        }else{
            $(this).addClass('on');
            $('.ad1').slick('slickPlay');

        }
    })

    $('.sec2_right .pause').click(function(){
        if($(this).hasClass('on')){
            $(this).removeClass('on');
            $('.ad2').slick('slickPause');
        }else{
            $(this).addClass('on');
            $('.ad2').slick('slickPlay');

        }
    })


})
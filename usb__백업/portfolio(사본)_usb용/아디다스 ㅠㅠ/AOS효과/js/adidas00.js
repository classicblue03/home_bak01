$(document).ready(function () {


    //메인슬라이드
    $('.btn').each(function (index) {
        $(this).attr('data-index', index);

    }).click(function () {

        var i = $(this).attr('data-index');

        moving(i);

    });


    //css에 반드시 속성값이 있어야됨
    function moving(elem) {

        $('.img_wrap').animate({
            left: -1920 * elem

        });

        $('.btn[data-index=' + elem + ']').addClass('on');
        $('.btn[data-index!=' + elem + ']').removeClass('on');

    }


    var num = 0;

    setInterval(function () {

        num++;

        if (num > 2) {
            num = 0;
        }

        moving(num);

    }, 3000);



    //해더
    window.addEventListener("scroll", function () {
        var header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
    });



    //메뉴 슬라이드다운
    $('.header_menu').hover(function () {
        $('.hidden_menu_wrap').css({
            display: 'block',
        });

    }, function () {
        $('.hidden_menu_wrap').css({
            display: 'none',
        });
    });



    //탑랭킹 무한갤러리
    var prod_width = $('.sec2_prod').width();

    $('.right_btn').click(function () {
        $('.sec2_prod_wrap').animate({
            left: -prod_width,
        }, function () {
            $('.sec2_prod_wrap').css({
                left: 0,
            }).find('.sec2_prod:first').appendTo('.sec2_prod_wrap');
        });
    });

    $('.left_btn').click(function () {
        $('.sec2_prod_wrap').animate({
            left: 0,
        }, function () {
            $('.sec2_prod_wrap').css({
                left: -prod_width,
            }).find('.sec2_prod:last').prependTo('.sec2_prod_wrap');
        });
    });



    //animate 대상에 css 반드시 포지션값 있어야 함!
    $('.right_btn').click(function () {
        $('.best_wrap').animate({
            left: -1650,
        }, 1000);
    });

    $('.left_btn').click(function () {
        $('.best_wrap').animate({
            left: 0,
        }, 1000);
    });


    //Best seller
    $('#cloth_but').click(function () {
        $('#best_cloth').css({
            display: 'block',
        });
        $('#best_sport, #best_kids, #best_etc').css({
            display: 'none',
        });
    });

    $('#sport_but').click(function () {
        $('#best_sport').css({
            display: 'block',
        });
        $('#best_cloth, #best_kids, #best_etc').css({
            display: 'none',
        });
    });

    $('#kids_but').click(function () {
        $('#best_kids').css({
            display: 'block',
        });
        $('#best_cloth, #best_sport, #best_etc').css({
            display: 'none',
        });
    });

    $('#etc_but').click(function () {
        $('#best_etc').css({
            display: 'block',
        });
        $('#best_cloth, #best_sport, #best_kids').css({
            display: 'none',
        });
    });






    //맨위로
    $('#btn_top').click(function () {
        $('html').animate({
            'scrollTop': 0
        }, 1000);
    })

    $(window).scroll(function () {
        var windowTop = $(window).scrollTop();
        console.log(windowTop);

        if (windowTop > 200) {
            $('#btn_top').addClass('on')
        } else {
            $('#btn_top').removeClass('on')
        }
    });









}); //end

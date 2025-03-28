$(document).ready(function () {


    //메인슬라이드
    $('.slide_btn p').each(function (index) {
        $(this).attr('data-index', index);

    }).click(function () {

        var i = $(this).attr('data-index');

        moving(i);

    });


    //css에 반드시 속성값이 있어야됨
    function moving(elem) {

        $('.slide_wrap').animate({
            left: -1500 * elem

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



    //맨위로
    $('#btn_top').click(function () {
        $('html').animate({
            'scrollTop': 0
        });
    })

    $(window).scroll(function () {
        var windowTop = $(window).scrollTop();
        console.log(windowTop);

        if (windowTop > 250) {
            $('#btn_top').addClass('on')
        } else {
            $('#btn_top').removeClass('on')
        }
    });









}); //end

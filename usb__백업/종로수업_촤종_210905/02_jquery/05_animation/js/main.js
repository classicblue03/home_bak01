$(function () {
    let btn1 = $('.btn1'),
        btn2 = $('.btn2'),
        btn3 = $('.btn3'),
        btn4 = $('.btn4'),
        btn5 = $('.btn5'),
        btn6 = $('.btn6'),
        btn7 = $('.btn7'),
        btn8 = $('.btn8');

    let fadeInOut = $('.fadeInOut'),
        fadeToggle = $('.fadeToggle');
    let slideUpDown = $('.slideUpDown'),
        slideToggle = $('.slideToggle'),
        ani = $('.ani');

    btn1.click(function () {
        fadeInOut.fadeIn();
    });

    btn2.click(function () {
        fadeInOut.fadeOut(1000); //이벤트가 발생하는 시간 값을 줄 수 있음 1초 = 1000
    });

    btn3.click(function () {
        fadeToggle.fadeToggle();
    });


    btn4.click(function () {
        slideUpDown.slideUp();
    });

    btn5.click(function () {
        slideUpDown.slideDown();
    });

    btn6.click(function () {
        slideToggle.slideToggle(2000);
    });

    btn7.click(function () {
        ani.width(0);
        ani.animate({'width' :200}, 1000);
    });

    btn8.click(function () {
        ani.animate({'width' :0}, 1000); //animate는 중괄호 밖에 시간값을 줄 수 있음
    });



})
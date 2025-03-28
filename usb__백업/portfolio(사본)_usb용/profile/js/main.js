$(function () {
    var ht = $(window).height();
    $("section").height(ht); //화면의 높이를 100%

    $(window).resize(function () {
        var ht = $(window).height();
        $("section").height(ht);
    });

    // 움직이는 꽃잎
    $("section").mousemove(function (e) {
        var mosX = e.pageX; //e=매게변수 , x좌표 받아오는 공식, 마우스위치를 e로 받아서 x로 보내줌
        var mosY = e.pageY;

        //꽃잎이 움직이는 범위
        $(".obj01").css({
            right: 130 + (mosX / 30),
            bottom: 20 + (mosY / 30)
        });
        $(".obj02").css({
            right: 600 + (mosX / 30),
            top: 20 - (mosY / 20)
        });

    }); //end


    $(".sec03 .cont").mouseenter(function () {
        var vid = $(this).find(".video").get(0);

        $(this).stop().animate({
            width: "35%"
        }, 1000, function () {
            $(this).find(".tit").stop().animate({
                right: "10px"
            }, 400);
            $(this).find(".desc").stop().animate({
                right: "10px"
            }, 800);
        });
    });

    $(".sec03 .cont").mouseleave(function () {
        $(this).stop().animate({
            width: "12%"
        }, 600);
        $(this).find(".desc").stop().animate({
            right: "-310px"
        }, 300);
    });

    var menu = $(".menu>li");
    var contents = $("#wrap>section");

    //event = 중복되는 거  막기위해, 변수 이름은 상관없음
    menu.click(function (event) {
        event.preventDefault();

        var tg = $(this);
        var i = tg.index(); //li의 index값 찾아서 i로 보내기
        var section = contents.eq(i); //eq=콘텐츠값이 같으면
        var tt = section.offset().top; //섹션의 높이=target top

        //섹션의 제일위를 맞춰서 스크롤되게하려고
        $("html, body").stop().animate({
            scrollTop: tt
        });
    });


    $(window).scroll(function () {
        var sct = $(window).scrollTop(); //sct=스크린탑  , 스크롤할때마다 반복되게

        contents.each(function () {
            var tg = $(this);
            var i = tg.index();
            if (tg.offset().top <= sct) {
                menu.removeClass("on");
                menu.eq(i).addClass("on");
            }
        });
    });

    //마우스휠 easing종류
    //delta = 스크롤시 현재 위치해있는 마우스값을 찾음 (휠 호출 감지)
    $("section").mousewheel(function (event, delta) {
        if (delta > 0) {
            var prev = $(this).prev().offset().top; //이전을 부르는 공식
            $("html, body").stop().animate({
                scrollTop: prev
            }, 1500, "easeOutBounce");
        } else if (delta < 0) {
            var next = $(this).next().offset().top;
            $("html, body").stop().animate({
                scrollTop: next
            }, 1500, "easeOutBounce");
        }
    });

}); //end
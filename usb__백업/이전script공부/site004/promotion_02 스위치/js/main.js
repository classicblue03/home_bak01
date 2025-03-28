$(function () {

    var ht = $(window).height();
    $("section").height(ht); //화면의 높이를 100%


    //resize = 브라우저가 반응형 될때마다 section높이를 갱신 (작아졌다 커졌을때, 여러경우 등등 *화면에서 항상 백퍼로 맞추기위해)
    $(window).resize(function () {
        var ht = $(window).height();
        $("section").height(ht);
    });

    $("section").mousemove(function (e) {
        var mosX = e.pageX; //e=매게변수 , x좌표 받아오는 공식, 마우스위치를 e로 받아서 x로 보내줌
        var mosY = e.pageY;


        //나누기는 꽃잎이 움직이는 범위
        $(".p11").css({
            right: 20 - (mosX / 30),
            bottom: 20 - (mosY / 30)
        });
        $(".p12").css({
            right: 130 + (mosX / 30),
            bottom: 20 + (mosY / 30)
        });
        $(".p13").css({
            right: 600 + (mosX / 30),
            top: 20 - (mosY / 20)
        });

        $(".p21").css({
            right: 20 - (mosX / 30),
            bottom: 20 - (mosY / 30)
        });
        $(".p22").css({
            right: 20 + (mosX / 30),
            bottom: 20 + (mosY / 20)
        });

        $(".p31").css({
            right: -20 - (mosX / 30),
            bottom: 20 - (mosY / 30)
        });
        $(".p32").css({
            right: 20 + (mosX / 30),
            bottom: 20 + (mosY / 20)
        });
        $(".p33").css({
            right: 70 + (mosX / 30),
            bottom: 76 - (mosY / 30)
        });

        $(".p41").css({
            right: -55 - (mosX / 30),
            bottom: 50 - (mosY / 30)
        });
        $(".p42").css({
            right: 20 + (mosX / 30),
            bottom: 20 + (mosY / 20)
        });

    });//end


    var menu = $(".menu>li");
    var contents = $("#wrap>section");

    menu.click(function (event) { //event-중복되는 거  막으려고 ,이름은 상관없음
        event.preventDefault();

        var tg = $(this);
        var i = tg.index(); //li의 index값 찾아서 i로 보내기

        var section = contents.eq(i); //eq=콘텐츠값이 같으면
        var tt = section.offset().top; //섹션의 높이=target top


        $("html, body").stop().animate({
            scrollTop: tt
        }); //섹션의 제일위를 맞춰서 스크롤되게하려고

    });//end



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
    });//end


    //마우스휠 easing종류
    $("section").mousewheel(function (event, delta) { //델타= 마우스 휠시에 위로갔는지 아래로갔는지 마우스값을 찾는거 (휠 호출을 감지)
        if (delta > 0) {
            var prev = $(this).prev().offset().top; //이전을 부르는 공식
            $("html, body").stop().animate({
                scrollTop: prev
            }, 1500, "easeOutBounce"); //1500=1.5초
        } else if (delta < 0) {
            var next = $(this).next().offset().top; //이전을 부르는 공식
            $("html, body").stop().animate({
                scrollTop: next
            }, 1500, "easeOutBounce"); //1500=1.5초
        }
    });

});//end
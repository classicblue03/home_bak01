
//객체변수앞 = $ 붙임
//일반변수 앞 = $ 안씀




$(function(){
$(".visual").each(function(){   //비주얼안의 인덱스값이 반복될때까지 실행하라

    var $container = $(this);    //이벤트를 일으키는 객체 = $
    var $slideGroup = $container.find(".slides");
    var $slides=$slideGroup.find(".slide");
    var $nav=$container.find(".slide_nav");     //nav = 좌우 버튼이미지
    var $indicator=$container.find(".slide_indicator");


    var slideCount=$slides.length;  //슬라이드의갯수 0~3까지 실행(총4개일때 , index값)
    var $indicatorHTML='';
    var currentIndex=0;
    var timer;  //setInterval



    //슬라이드img에 해당하는 indicator생성
    $slides.each(function(i){    //index값만큼 반복되서 실행
        $(this).css({left:100*i+"%"});  //첫번째이미지=0% , 두번째img=100%
        $indicatorHTML += "<a href = '#'>" + (i+1) + "</a>";

    }); 

    $indicator.html($indicatorHTML);    //페이저(indicator)을 만들엇음









    function goToSlide(index){
        $slideGroup.animate({left:-100*index+"%"},500);     //500 = 0.5초 동안 움직여라 (단위=%)
        currentIndex=index;
        updateNav();
    }







    //선택된 개체 컨트롤제어    (*개체는 객체와 다름)
    function updateNav(){
        var $navPrev=$nav.find(".prev");    //index값이 0일때 prev버튼 없애기
        var $navNext=$nav.find(".next");

            if(currentIndex===0){    //첫번째img가
               $navPrev.addClass("disabled");
        }else{
            $navPrev.removeClass("disabled");
        }



        if(currentIndex===slideCount-1){
            $navNext.addClass("disabled");
        }else{
            $navNext.removeClass("disabled");
        }


    //선택시 blk, 아닐시fff (페이저)
        $indicator.find("a").removeClass("active")
        .eq(currentIndex).addClass("active");   //이건 체이닝기법임

    }







    // 타이머함수
    function startTimer(){
        timer=setInterval(function(){
            var nextIndex=(currentIndex+1) % slideCount;   //현재인덱스에서 다음으로 넘어가며 시간주기
            goToSlide(nextIndex);
        },3000);    //3초동안 반복되는거(모든것이 이루어지는시간=3초)
    }

    function stopTimer(){
        clearInterval(timer);
    }

    



    //슬라이딩 (움직이게하기)
    


    //$(".visual>.slide_nav>a").click(function(){})
    $nav.on("click", "a", function(event){
        event.preventDefault(); //a링크 차단
        if($(this).hasClass("prev")){
            goToSlide(currentIndex-1);
        }else{
            goToSlide(currentIndex+1);
        }
    });



    $indicator.on("click","a",function(event){
        event.preventDefault(); //a링크 차단
        if(!$(this).hasClass("active")){    //active를 가지고있지않다면 = 선택된게 없으면
            goToSlide($(this).index());
        }
    });




    $container.on({
        mouseenter:stopTimer,   //올라갔을때
        mouseleave:startTimer   //빠졌을때
    });

    goToSlide(currentIndex);
    startTimer();





});

});
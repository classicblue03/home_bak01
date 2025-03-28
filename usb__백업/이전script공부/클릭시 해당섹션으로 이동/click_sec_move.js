/*
    1. 퀵메뉴를 화면 가운데 오도록,
    화면상의 top값= window 나누기 2한값
    2. 화면움직임녀 탑의 좌표가움직임
    3. top에 window값 넣기
*/

$(function () {
    /* $("#gnb").css("top",$(window).height()/2+"px");*/
    $("#gnb").css("top", $(window).height() / 2 - ($("#gnb").height() / 2) + "px");

    $(window).scroll(function () {
        var win = $(this).scrollTop() + ($(this).height() / 2 - $("#gnb").height() / 2);
        $("#gnb").stop().animate({
            top: win
        }, 300);
    });


    /*
        버튼을 클릭시 페이지로 스르륵올라가기 , tg=타켓

        offset 전체html에서의 위치찾기 , 제일 위에서 얼마나떨어져있는지 , 1000=1초동안
        스크롤탑 -화면에서 제일위
        옵셋탑 - 위에서 얼마만큼 떨어졋는지(html에서)

    */
    var gnbA = $("#gnb>li>a");
    gnbA.click(function () {
        var tg = $(this).attr("href"); /*a안에 잇는 href로*/
        $("html, body").animate({
            scrollTop: $(tg).offset().top
        }, 1000);


        if (gnbA.target) {
            $(gnbA.target).removeClass("on");
            $(this).addClass("on");
        }

        gnbA.target = this; /*최초에 한번실행해줘야함*/
        return false; /*a속성으로 가지말고 a링크차단하기*/
    });

    gnbA[0].click(); /*접속시 첫번째페이지에 있으라고*/


}); //end
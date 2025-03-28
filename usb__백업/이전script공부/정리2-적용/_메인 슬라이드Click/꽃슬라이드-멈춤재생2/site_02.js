// JavaScript Document

$(function () {

    var list = $("#indicator>a");
    var li = $("#banner").find("li"); //배터의 하위태그들중에서 li를 찾는다
    var i = 0;
    var playOn = false;
    var roll;

    li.hide(); //처음엔 li안보이게
    list.click(function () {
        var index = list.index(this); //클릭한 변수를 index안에
        if (list.state) {
            stop();
            imgOff(list.state);
            imgOn(this);
            $(li.state).hide(); //현재보이는것 li img  =하이드시키기
            $(li[index]).show();
            i = index;
            play();
        } else { //최초실행시
            imgOn(this);
            $(li[index]).show();
            play();
        }
        list.state = this;
        li.state = li[index];
        return false;
    });

    $(".left").click(function () {
        i--;
        if (i < 0) { //인덱스 감소해서 왼쪽이미지 보여주기
            i = list.length - 1;
        }
        list[i].click();
    });

    $(".right").click(function () {
        i++; //인덱스 추가해서 오른쪽이미지 보여주기
        if (i > list.length - 1) {
            i = 0;
        }
        list[i].click();
    });

    $(".stop").click(function () {
        stop();
    });
    $(".play").click(function () {
        play();
    });

    function play() {
        if (!playOn) {
            playOn = true;
            roll = setInterval(function () {
                $(".right").click()
            }, 2000);
        }
    }

    function stop() {
        if (playOn) {
            playOn = false;
            clearInterval(roll);
        }
    }

    function imgOn(t) {
        $(t).find("img").attr("src", $(t).find("img").attr("src").replace("off", "on"));
    }

    function imgOff(t) {
        $(t).find("img").attr("src", $(t).find("img").attr("src").replace("on", "off"));
    }

    list[0].click(); //강제(최초)실행 , 첫화면에 빨간불

});

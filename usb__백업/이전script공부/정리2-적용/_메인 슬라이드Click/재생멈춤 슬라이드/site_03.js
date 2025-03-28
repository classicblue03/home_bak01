


var cnt=0;
var slidingAuto=null;    /*slidingAuto = 변수*/




function play(direct){
    if(direct=="right"){         /*다이렉트가 right라면 카운트증가시키기(++)*/
        cnt++;
        if(cnt>3) cnt=0;        /*3 = index값(0부터시작 ,사진은4장 ,    5번째이미지는 존재x = cnt=0)*/
    }else if(direct=="left") {     
        cnt--;
        if(cnt<0) cnt=3;
    }else{                               
        cnt=direct;
    }





    var newLeft = cnt*-950;
    $(".imgList").stop().animate({
        left:newLeft+"px"
    }, "slow");

    if(slidingAuto) clearTimeout(slidingAuto);
    slidingAuto=setTimeout("play('right')", 5000); //시간지연함수(슬라이딩-5초멈춤-슬라이딩-멈춤...)    vs   setInterval(일정시간반복 = 5초 5초 반복)
}






var slidingAuto=setTimeout("play('right')", 5000);

$(function(){
    $(".nextbtn").click(function(){
        play("right");
    });
    $(".prevbtn").click(function(){
        play("left");
    });
    $(".stopbtn").click(function(){
        if(slidingAuto) clearTimeout(slidingAuto);
    });
    $(".playbtn").click(function(){
        slidingAuto=setTimeout("play('right')", 5000);
    });




    $(".imgBtn>li>a").each(function(index){     //each = jq의 배열
        $(this).click(function(){
            if(slidingAuto) clearTimeout(slidingAuto);
            play(index);
        });
    });
});
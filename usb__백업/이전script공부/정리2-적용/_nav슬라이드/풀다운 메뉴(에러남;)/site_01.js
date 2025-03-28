$(function (){

    var gnbLi=$("#gnb>li");
    var ul=$("#gnb>li>ul");
    var headerMin=$("#innerHeader").height();
    var headerMax=ul.innerHeight()+headerMin;
    var state=false;
    
    gnbLi.mouseenter(function(){
        if(!state){
            $("#innerHeader").stop().animate({
                height:headerMax
            },150,
            function(){
                ul.stop().fadeIn(150);
            });
            state=true;
        }
        $(this).find("ul").addClass("on");
    });

    gnbLi.mouseleave(function(){
        $(this).find("ul").removeClass("on");
    });

    $("#header").mouseleave(function(){
        ul.stop().fadeOut(150, function(){
            $("#innerHeader").stop().animate({
                height:headerMin
            },150);
        });
        state=false;
    });

    $("#gnb li a").focus(function(){
        $("#innerHeader").stop().animate({
            height:headerMax
        },150);
        ul.stop().fadeIn(150);
    }).blur(function(){
        $("#innerHeader").stop().animate({
            height:headerMin
        },150);
        ul.stop().fadeOut(150);
    });
});
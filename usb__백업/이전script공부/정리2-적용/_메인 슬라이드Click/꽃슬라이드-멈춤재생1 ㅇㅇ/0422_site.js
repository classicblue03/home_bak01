$(function(){

    var eleWidth=$(".frame>ul>li").innerWidth();
    var state=false;
    var playOn=false;
    var direction="left";
    var bannerAuto;

    function play(){
        if(!playOn){
            playOn=true;
            bannerAuto=setInterval(function(){
                if(direction="left"){
                    $(".left").click();
                }else{
                    $(".right").click();
                }
            },2000);
        }

        if(playOn){
            $(".frame>li>a").mouseover(function(){
                stop();
            });
        }
    }//play()

    function stop(){
        if(playOn){
            playOn=false;
            clearInterval(bannerAuto);
        }
        $(".frame>li>a").mouseout(function(){
            play();
        });
        $(".frame>li>a").click(function(){
            location.href;
        });
    } //stop()

    function left(){
        stop();
        direction="left";
        $(".frame>ul").animate({
            left:eleWidth*-1

        },500,
        function(){
            $(this).children("li:first").insertAfter($(this).children("li:last"));
            $(this).css("left",0);
            state=false;
            play();
        });
    } //left()

    function right(){
        stop();
        direction="right";
        $(".frame>ul>li:last").insertBefore($(".frame>ul>li:first"));
        $(".frame>ul").css("left",eleWidth*-1); 
        $(".frame>ul").animate({
            left:0
        },500,
            function(){
                state=false;
                play();
            });

    }//right()



    
    $(".left").click(function(){
        if(!state){
            state=true;
            left();
        }
    });

    $(".right").click(function(){
        if(!state){
            state=true;
            right();
        }
    });

    $(".stop").click(function(){
        stop();
    });
    $(".play").click(function(){
        play();
    });

    $(".play").click();

});
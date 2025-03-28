$(function(){
	
	var list=$(".what_indi>a");
	var li=$(".whaton").find("li");
	var i=0;
	var playOn=false;
    var roll;
    
	li.hide();
	list.click(function(){
		var index=list.index(this);
		if(list.state){
			stop(); 
			imgOff(list.state);
			imgOn(this);
			$(li.state).hide();
			$(li[index]).show();
			i=index;
			play(); 
		}else{
			imgOn(this);
			$(li[index]).show();
			play(); 
		}
		list.state=this;
		li.state=li[index];
		return false;		
	});
	
	$(".what_left").click(function(){
		i--;
		if(i<0){
			i=list.length-1;
		}
		list[i].click();
	});
	
	$(".what_right").click(function(){
		i++;
		if(i>list.length-1){
			i=0;
		}
		list[i].click();
    });
    
    $("#wrap01").mouseenter(function(){
        stop();
    });
    $("#wrap01").mouseleave(function(){
        play();
    });

	
	function play(){
		if(!playOn){
			playOn=true;
			roll=setInterval(function(){
				$(".what_right").click()
			},2000);
		}
	}
	
	function stop(){
		if(playOn){
			playOn=false;
			clearInterval(roll);
		}
	}
	







	//페이저 색상바꾸기~
	function imgOn(t){
		$(t).css("background-color","black");
	}
	
	function imgOff(t){
        $(t).css("background-color","white");
    }
	
	list[0].click();
	





	//시작~
	//커버박스 오버시 커버박스 밑의 div가 애니매이션을 일으킴
	//바텀을 0으로주는 애니메이션만들기

	$("#cover_box").mouseenter(function(){
		$(this).find(".cover").stop().animate({
			bottom:0
		},500);	//0.5초
	});


	$("#cover_box").mouseleave(function(){
		$(this).find("div").stop().animate({
			bottom:-100+"px"
		},500);
	});












});
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
    $("#wrap02").mouseleave(function(){
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
	
	function imgOn(t){
		$(t).css("background-color","black");
	}
	
	function imgOff(t){
        $(t).css("background-color","white");
    }
	
	list[0].click();
	
});
// JavaScript Document
//0426 꽃팝업과 동일함




$(function(){
	
	var list=$(".what_indi>a"); //인디가 눌러졌을때
	var li=$(".whaton").find("li");	// 왓온을 찾는다 - 배터의 하위태그들중에서 li를 찾는다
	var i=0;	
	var playOn=false;
    var roll;







    
	li.hide();	//처음엔 li안보이게
	list.click(function(){
		var index=list.index(this);	//클릭한 변수를 index안에
		if(list.state){
			stop(); 
			imgOff(list.state);
			imgOn(this);
			$(li.state).hide();	//현재보이는것 li img  =하이드시키기
			$(li[index]).show();
			i=index;
			play(); 
		}else{	//최초실행시
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
		if(i<0){	//인덱스 감소해서 왼쪽이미지 보여주기
			i=list.length-1;
		}
		list[i].click();
	});
	
	$(".what_right").click(function(){
		i++;	//인덱스 추가해서 오른쪽이미지 보여주기
		if(i>list.length-1){
			i=0;
		}
		list[i].click();
    });



//멈추는기능 추가하기(팝업만들수있다!!)
    $("#wrap_01").mouseenter(function(){
        stop();
    });

    $("#wrap_02").mouseleave(function(){
        play();
    });



	/*
	$(".stop").click(function(){
		stop();
	});
	$(".play").click(function(){
		play();
	});
    */
    







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
    
    





//페이저(스타일시트)
	function imgOn(t){
		$(t).css("background-color","black");
	}
	
	function imgOff(t){
		$(t).css("background-color","white");
	}




    






	list[0].click();	//강제(최초)실행 , 첫화면에 빨간불
	
});
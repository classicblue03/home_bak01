$(document).ready(function(){
  // 윈도우 스크롤 관련 함수()  
  //scrollTop()- 스크롤바의 위치를 상단으로 기준으로 스클로바 위치를 움직여 주는 함수
  //$('body,html').animate({scrollTop:픽셀},시간차)

  $('.btn_down1').click(function(){
    $('body,html').animate({'scrollTop':1277},1000);
  });
  $('.btn_down2').click(function(){
    $('body,html').animate({'scrollTop':2302},1000);
  });

  //사용자가 스크로바를 움직이는 이벤트
  $(window).scroll(function(){
      //스크롤바의 위치확인
    var num = $(document).scrollTop();
    console.log(num);

    if(num>1277){
        $('.header').addClass('on');
    }else{
        $('.header').removeClass('on')
    }
    //스크롤바의 위치에 따라서 Quick 메뉴 보이기/ 안보이기
    if(num>=0 && num<=1276){
      $('.quick li').removeClass('on');
      $('.quick li').eq(0).addClass('on');
    }else if(num>=1277 && num<=2301){
      $('.quick li').removeClass('on');
      $('.quick li').eq(1).addClass('on');
    }else if(num>=2302 && num<=3301){
      $('.quick li').removeClass('on');
      $('.quick li').eq(2).addClass('on');
    }else if(num>=3302 && num<=4441){
      $('.quick li').removeClass('on');
      $('.quick li').eq(3).addClass('on');
    }else if(num>=4442 && num<=5481){
      $('.quick li').removeClass('on');
      $('.quick li').eq(4).addClass('on');
    }

    //스크롤바의 위치에 따라서 animation 실행할때
    if(num>=820 && num < 2302){
      $('.mobile_case').addClass('on');
    }else if(num>0 && num<1277){
      $('.mobile_case').removeClass('on');
    }

    if(num > 1700){
      $('.cat').addClass('on');
      $('.phone').addClass('on')
    }else if(num>0 && num<1700){
    $('.cat').removeClass('on');
      $('.phone').removeClass('on')
    }
  });

  //quick menu의 버튼을 클릭했을때 

  $('.quick li').click(function(){
    var num = $(this).index();
    console.log(num); //우측 버튼 누를때마다1~12까지 찍힘

    //클릭한 요소에 불 들어옴
    $('.quick li').removeClass('on');
    $(this).addClass('on');

    if(num==0){
      $('body,html').animate({'scrollTop':0},600)
    }else if(num==1){
      $('body,html').animate({'scrollTop':1277},600)
    }
    else if(num==2){
    $('body,html').animate({'scrollTop':2302},600)
    }
    else if(num==3){
      $('body,html').animate({'scrollTop':3302},600)
    }
    else if(num==4){
        $('body,html').animate({'scrollTop':4442},600)
    }
    else if(num==5){
      $('body,html').animate({'scrollTop':5482},600)
  }


  });

});
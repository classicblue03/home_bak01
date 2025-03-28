
//IIFE(즉시실행함수 표현식)
;(function($, $w, $d, undefined){ //매개변수
    // ECMA Script 5 (이크마 스크립트 5)

    //객체
    var brando = {
        init:       function(){ //메서드(리터럴함수)
            this.smoothScrollFn();
            this.headerFn();
            this.section01Fn();
            this.section02Fn();
            this.section03Fn();
            this.section04Fn();
            this.section05Fn();
            this.section06Fn();
            this.section07Fn();
            this.section08Fn();
            this.section09Fn();
            this.section10Fn();
            this.section11Fn();
            this.section12Fn();
            this.section13Fn();
            this.section14Fn();
        },
        smoothScrollFn: function(){ //브란도 전체 공용 함수 스무스 스크롤링 이벤트 함수
            
            
            //버튼 클릭 이벤트
            // $('.smoothBtn')
            //     .on('click',function(event){
            //         event.preventDefault();
            //         alert('클릭시!!');
            //     })
            //     .on('mouseenter',function(event){
            //         event.preventDefault();
            //         alert('마우스 오버시!!');
            //     })
            //     .on('mouseleave',function(event){
            //         event.preventDefault();
            //         alert('마우스 벗어날때!!');
            //     });


            // $('.smoothBtn').on({
            //     click:  function(event){
            //         event.preventDefault();
            //         alert('클릭!!');
            //     },
            //     mouseenter:  function(event){
            //         event.preventDefault();
            //         alert('마우스 오버시!!');
            //     },
            //     mouseleave:  function(event){
            //         event.preventDefault();
            //         alert('마우스 떠날때!!');
            //     }
            // });

            $('.smoothBtn').on({
                click:  function(event){
                    event.preventDefault(); //event.stopPropergation(); 자식요소 이벤트가 부모예게로 전파를 차단
                    //클릭한 버튼(a링크)의 href 속성(Attribute어트리뷰트 = Property 프로퍼티 )을 가져온다.
                    
                    //var url = $(this).prop('href'); //http://127.0.0.1:5500/index.html#section05
                    // $('html,body').stop().animate({scrollTop:$('#section02').offset().top},800);
                    
                    var url = $(this).attr('href'); //#section05
                    $('html,body').stop().animate({scrollTop:$( url ).offset().top},800,'easeInOutCirc');
                }
            });

        },            
        headerFn:   function(){

            //헤더영역 스크롤 이벤트 (페럴럭스)
            var $window = $(window);
            var $header = $('#header');

                //DOM(도큐먼트 오브젝트 모델링) Document Object Modelling
                //BOM(브라우저 오브젝트 모델링) Browser Object Modelling
                //마우스로 스크롤값이 아래로 30픽셀이상 >= 내려가면 
                //선택자 헤더영역(#header)에 효과 이벤트가 발생하게 하라   

                $window.scroll(function(){ //스크롤 이벤트
                    //console.log(  $(window).scrollTop() ); //스크롤 탑값 확인
                    if( $window.scrollTop() >= 30 ){  //마우스로 스크롤값이 아래로 30픽셀이상 내려가면
                        $header.addClass('addHeader');  //헤더에 클래스 추가
                    }
                    else{
                        $header.removeClass('addHeader'); //추가된 클래스 삭제
                    }
                });



        },
        section01Fn:   function(){
            //섹션1의 높이를 창(window) 높이로 설정하되 반응형으로
            //데스크톱, 테블릿, 모바일등의 크기(resize()리사즈)에 반응하도록

            var $window = $(window);
            var $section1234 = $('#section01, #section02, #section03, #section04');
            var $winH = $window.innerHeight();  //창높이
                $section1234.css({ height:$winH }); //섹션1의 높이 창 높이로 설정


            //창 크기가 변경될 때만 반응하고 실행한다.
            $window.resize(function(){

                $winH = $window.innerHeight();  //창높이 즉시 가져오기
                $section1234.css({ height:$winH }); //섹션1234의 높이 창 높이로 설정

            });

           




        },
        section02Fn:   function(){

        },
        section03Fn:   function(){

        },
        section04Fn:   function(){

        },
        section05Fn:   function(){

        },
        section06Fn:   function(){

        },
        section07Fn:   function(){

        },
        section08Fn:   function(){

        },
        section09Fn:   function(){

        },
        section10Fn:   function(){

        },
        section11Fn:   function(){

        },
        section12Fn:   function(){

        },
        section13Fn:   function(){

        },
        section14Fn:   function(){

        }
    };  //객체 끝


    //객체.메서드 실행
    brando.init(); //초기실행함수


})(jQuery, window, document); //아규먼트

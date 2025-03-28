// 즉시 표현함수 (오픈소스와 충돌방지)
;(function($, window, document, undefined){    //매개변수, argument에서 등록되지않은함수 = undefined


        //객체
        var brando = {
            init:       function(){  //메서드(익명함수 === 리터럴함수)
                this.headerFn();     //함수실행
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
            headerFn:   function(){
                
                //header 스크롤이벤트 (페럴럭스)
                var $window = $(window);
                var $header = $('#header');

                //DOM(Document Object Modeling) tag
                //BOM(Browser Object Modeling) browser,scroll event
                //스크롤값이 30px이상 내려가면
                //선택자 header영역에 이벤트발생.
                $window.scroll(function(){                  //스크롤이벤트
                    console.log( $window.scrollTop() );     //scroll Top값 확인
                    if( $window.scrollTop() >=30 ){         //스크롤값이 30px이상 내려가면
                        $header.addClass('addHeader');      //헤더에 class추가
                    }else{
                        $header.removeClass('addHeader');   //헤더에 추가된 class삭제
                    }
                });

            },
            section01Fn:   function(){

                // alert('섹션1');
                //기본실행
                //section01 높이를 window높이로 설정하고 반응형으로 작업
                //데스크탑, 테블릿, 모바일 등의 크기(Resize)에 반응하도록

                var $window = $(window);
                var $section1234 = $('#section01, #section02, #section03, #section04');
                var $winH = $window.innerHeight();          //window 높이
                    $section1234.css({ height:$winH });  //section01 window 높이설정

                
                //widow 크기가 변경될때만!! 반응,실행함
                $window.resize(function(){
                    var $winH = $window.innerHeight();      //window 높이 즉시가져오기
                    $section1234.css({ height:$winH });  //section01 window 높이설정
                    
                    // console.logo($winH);
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
            section010Fn:   function(){

            },
            section11Fn:   function(){

            },
            section12Fn:   function(){

            },
            section13Fn:   function(){

            },
            section14Fn:   function(){

            }


        };//객체 end


        //객체.메서드실행
        brando.init();  //초기실행 함수 (brando 전체실행)


})(jQuery, window, document);  //전달자 argument

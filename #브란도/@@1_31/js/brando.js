// 즉시 표현함수 (오픈소스와 충돌방지)
//IIFE 즉시 실행함수 표현식
;(function($, window, document, undefined){ //매개변수, argument에서 등록되지않은함수 = undefined (이름설정은 상관없음)
        //ECMA Script 5(var)

        var brando = {
            //전역변수
            // x:100,
            // y:'변수값 내용'

            init:       function(){         //메서드(익명함수 === 리터럴함수)
                this.smoothScrollFn();
                this.headerFn();
                this.section0234Fn();       //section01~04 반응형
                this.section06Fn();
                this.section07Fn();

                this.section09Fn();
                this.section10Fn();
                this.section11Fn();
                this.section12Fn();
                this.section13Fn();
                this.section14Fn();

            },
            //전체 공용함수(smoothScrolling 이벤트함수)
            smoothScrollFn: function(){
                var $smoothBtn  = $('.smoothBtn');
                var $htmlBody   = $('html,body');
                var $mobile     = $('.mobile');

            //alert(this.y);
            $smoothBtn.on({
                click:  function(event){
                    event.preventDefault();                
                    $this = $(this);    //현재 클릭한 이(this) 버튼

                    var url = $this.attr('href');
                        $htmlBody.stop().animate({scrollTop:$( url ).offset().top-60},800,'easeInQuad');
                        $mobile.stop().slideUp(300);   //모바일메뉴 안보이게 처리
                    }
                });

            },
            //header 스크롤이벤트(페럴럭스)
            headerFn:   function(){
                var $window    = $(window);
                var $header    = $('#header');
                var $mobilebtn = $('.mobilebtn')
                var $mobile    = $('.mobile')

                    //스크롤값이 30px이상 >= 내려갈때 header에 이벤트발생
                    $window.scroll(function(){                  
                        if($window.scrollTop() >=30){          //30px이상 내려가면
                            $header.addClass('addHeader');     //헤더에 class추가
                        }
                        else{
                            $header.removeClass('addHeader');  //헤더에 추가된 class삭제
                        }
                    });

                    //모바일버튼 클릭이벤트
                    $mobilebtn.on({
                        click:  function(){
                            $mobile.stop().slideToggle(300);
                        }
                    });
                    
                    //모바일메뉴 노출시
                    //창너비가 980초과이면 slideUp()으로 강제로 안보이게 처리.
                    function resizeFn(){
                        if($window.innerWidth() > 980){
                            $mobile.stop().slideUp(0);

                        }
                    }
                    setTimeout(resizeFn,100);   //새로고침할때 (로딩시)

                    $window.resize(function(){  //창크기가 변경시
                        resizeFn();
                    });

            },
            section0234Fn:   function(){
                //section01 높이를 window높이로 설정하기.
                //pc,tab,mobile 등의 크기에 반응하도록(Resize)

                //window높이가 컨텐츠박스($boxH) 보다 작으면
                //window높이를 컨텐츠박스 높이($boxH)로 설정하는 반응형알고리즘
                var $window         = $(window);
                var $section01      = $('#main #section01');
                var $section0234    = $('#main #section01, #main #section02, #main #section03, #main #section04');
                var $winH           = $window.innerHeight();
                var $box            = $('#main .section0234 .box')
                var $boxH           = $box.innerHeight();       //section2,3.4에서만 사용 (패딩을포함한 내부크기)
                var $section01H     = $window.innerHeight();    //창높이


                function resizeFn(){
                    $winH = $window.innerHeight();              //window 높이
                    var $section01H     = $window.innerHeight();//창높이
                    $boxH = $box.innerHeight();                 //박스높이

                    if( $winH < $boxH+80 ){                    //창높이가 ~보다 작으면
                        $winH = $boxH+80;                      //창높이 = 컨텐츠박스에 위아래 여백 40씩 추가
                    }
                    $section01.css({height:$winH});            //section01의 창높이
                    $section0234.css({height:$winH});          //section01~04 window높이
                    $box.css({marginTop:-($boxH/2)});          //컨텐츠박스 높이 / 2
                    //#wrap #main .section0234 .wrap .gap .container .box( 275/2 ), 반만올리기.

                }
                setTimeout(resizeFn,100);
                
                //widow 크기가 *변경될때만 반응,실행한다.   
                $window.resize(function(){  
                    resizeFn();
                });

            },
            //Menu gallery (BREAKFAST, LUNCH, DINNER)
            //bg-image 오버시 이벤트발생
            section06Fn:   function(){
                var $bgImg = $('#main #section06 .bg-image')

                $bgImg.on({
                    mouseenter: function(){
                        var $this = $(this);

                        $bgImg.removeClass('addHover');     //초기화
                        $this.addClass('addHover');         //오버시
                    },
                    focusin: function(){                    //HTML에서 tabIndex="0"설정후 -> 키보드접근 focus,focusin (반대 focusout, blur)
                        $bgImg.removeClass('addHover');     //초기화
                        $this.addClass('addHover');         //오버시
                    }
                });

            },
            // Our chef 
            //이미지(bg-image) 오버시 이벤트발생
            section07Fn:   function(){
                var $profileGap = $('#main #section07 .profile-gap')

                $profileGap.on({
                    mouseenter: function(){
                        $profileGap.removeClass('addProfile');   //초기화
                        $(this).addClass('addProfile');          //오버시
                    },
                    focusin: function(){                        //HTML에서 tabtindex="0"설정후 -> 키보드접근 focus,focusin (반대 focusout, blur)
                        $profileGap.removeClass('addProfile');  //초기화
                        $(this).addClass('addProfile');         //오버시
                    }
                });

            },
            //FOOD GALLARY
            section09Fn:   function(){
                var tot                         = $('#section09 .gallery-item').length; //전체 갤러리의 갯수
                var hideCount                   = 0;
                var n                           = tot-hideCount;                        //전체갯수-감춰진갯수

                var cols                        = 4;   
                var imgW                        = 0;
                var imgH                        = imgW*0.75;
                var rows                        = Math.ceil(n/cols);                    //줄갯수 = 전체갤러리 갯수/칸수 (switch 끝나고 실행되야함)
                var $gallBtn                    = $('#section09 .gall-btn');
                var idx                         = 0;                                    //네비게이션
                var winW                        = $(window).innerWidth;
                var $sec09galleryItem           = $('#section09 .gallery-item');        //갤러리 항목(li)
                var $sec09galleryContainer      = $('#section09 .gallery-container');   //갤러리 전체컨테이너
                var $section09                  = $('#section09');
                var a                           = [];                                   //show() 배열요소index li.show()
                var h                           = [];                                   //hide() 배열요소index li.hide()    
                
            //갤러리 반응형 함수
            function resizeFn(){
                $winW = $(window).innerWidth();  //창의 너비를 즉시 반응하도록 너비값 가져오기 
                if($winW > 1200){
                    cols=4;
                }
                else if($winW >=990){
                    cols=3;
                }
                else if($winW > 760){
                    cols=2;
                }
                else{
                    cols=1;
                }

                imgW = $winW/cols;
                imgH = imgW*.75;
                
                $sec09galleryItem.removeClass('addScale');
                $sec09galleryItem.css({width:imgW, height:imgH});   //갤러리 전체박스 너비,높이 구하기.


            switch(idx){
                case 0: // ALL
                    //클릭했을때만 데이터 남기기 $sec09galleryItem.removeAttr('data-hide')
                    h =[];  //배열초기화
                    a = [0,1,2,3,4,5,6,7]
                    break;
                case 1: //BREAKFAST 감춰진갯수(2)          
                    h = [0,2]
                    a = [1,3,4,5,6,7];           //배열갯수에 따라서 자동화시키기
                    break;
                case 2: //DINNE 감춰진갯수(4)
                    h = [1,3,4,5]
                    a = [0,2,6,7];
                    var k=-1;
                    break;
                case 3: //DRINKS 감춰진갯수(3)
                    h = [0,2,5]
                    a = [1,3,4,6,7];    
                    var k=-1;
                    break;
                default: //LUNCH 감춰진갯수(4)
                    h = [0,1,3,6]
                    a = [2,4,5,7];

            } //switch() 끝
                

            //1번 hide요소
            $sec09galleryItem.removeAttr('data-hide')    //이전에 생성된건 지우고 4실행
                for(var i=0; i<h.length; i++){          //(var i=0; i<2; i++)
                    $sec09galleryItem.eq(h[i]).attr('data-hide',idx).stop().hide();

                }

            //2번
            //n변수에 감춰진요소를 뺀갯수
            //n변수의 변화되는 함수호출하기
            hideCount = 0;
                $sec09galleryItem.each(function(){  //반복처리
                    if($(this).attr('data-index')){
                        hideCount++;

                    }
                });
                n = tot - hideCount;                             //감춰진요소의 갯수
                rows = Math.ceil(n/cols);                        //줄갯수 = 전체 갤러리 갯수/칸수
                $sec09galleryContainer.css({height:imgH*rows});  //갤러리 전체박스 높이구하기


                //3번 show요소
                var k=-1;                           //배열은 0부터시작됨.
                    for(var i=0; i<rows; i++){      
                        for(var j=0; j<cols; j++){  //x칸일때 0부터 ~까지
                            k++;                    
                            if(k>a.length-1) break;         
                            $sec09galleryItem.eq(a[k]).stop().show().animate({left:imgW*j, top:imgH*i});
                        
                        }
                    }
                    $sec09galleryItem.addClass('addScale');

                }// resizeFn() 끝(갤러리 반응형 함수)


                $(window).resize(function(){
                    resizeFn();

                });
                setTimeout(resizeFn,10);    //0.001초 후에 실행


                //갤러리 네비게이션 버튼 클릭 이벤트
                $gallBtn.each(function(index){
                    $(this).on({
                        click: function(event){
                            event.preventDefault();
                            $gallBtn.removeClass('addNav');
                            $(this).addClass('addNav');
                            
                            idx = index; //switch() 변수 idx에 버튼 번호 index를  전달
                            resizeFn();

                        } //클릭이벤트 끝
                    });
                });

            },
            section10Fn:   function(){
                var cnt         = 0;
                var $slide      = $('#section10 .slide');
                var $slideWrap  = $('#section10 .slide_wrap');

                var $slideCon   = $('#section10 .slide_container');
                var $slideConW  = $('#section10 .slide_container').innerWidth();
                var $nextBtn    = $('#section10 .nextBtn');
                var $prevBtn    = $('#section10 .prevBtn');


                function resizeFn(){
                    //slide_container 너비값을 slide 너비로 설정
                    $slideConW = $slideCon.innerWidth();     
                    $slide.css({width:$slideConW});                      //.slide 1개 너비
                    $slideWrap.css({width:$slideConW*3});                //.slide 975px*3 너비
                    mainSlideFn();  //메인슬라이드 반응형 left적용하기.
                }
                //화면너비 바뀔때마다 실행
                $(window).resize(function(){
                    resizeFn();

                });
                setTimeout(resizeFn,10);    //무조건 실행 0.001s

                //1.메인슬라이드 함수
                function mainSlideFn(){
                    $slideWrap.stop().animate({left:-($slideConW*cnt)},500,'easeInOutExpo'); //0.6s동안 슬라이드
                }
                //2.다음 카운트함수
                function nextCountFn(){
                    cnt++;
                    if(cnt>2){
                        cnt=2;  //2보다 크면 머물러있기
                    }
                    mainSlideFn();
                }
                //2. 이전 카운트 함수 
                function prevCountFn(){
                    cnt--;
                    if(cnt<0){
                        cnt=0;
                    }
                    mainSlideFn();
                }
                //3.다음 클릭 버튼이벤트
                $nextBtn.on({
                    click: function(event){
                        event.preventDefault();
                        nextCountFn();
                    }
                });
                //3. 이전 클릭 버튼 이벤트
                $prevBtn.on({
                    click:  function(event){
                        event.preventDefault();
                        prevCountFn();
                    }
                });
                //4. 스와이프 터치 이벤트 이벤트
                $slideCon.swipe({
                    swipeLeft:function(){
                        nextCountFn(); 
                    },
                    swipeRight:function(){
                        prevCountFn();
                    }
                });
            },
            // left_box 너비값을 구해서 text_box의 높이적용
            section11Fn:   function(){
                var $window         = $(window);
                var $leftBox        = $('#section11 .left_box');
                var $leftBoxW       = $('#section11 .left_box').innerWidth();  //반응형 너비
                var $rightBox       = $('#section11 .right_box');
                    $leftBox.css({height:$leftBoxW}); //반응형 높이설정
                    $rightBox.css({height:$leftBoxW});//반응형 높이설정
                    $rightBox.css({height:$leftBoxW});//반응형 높이설정

                function resizeFn(){
                    $leftBoxW   = $('#section11 .left-box').innerWidth();
                    $leftBox.css({height:$leftBoxW});
                    $rightBox.css({height:$leftBoxW});
                    $rightBox.css({height:$leftBoxW});

                }
                $window.resize(function(){
                    resizeFn();
                });
                setTimeout(resizeFn,10);

            },
            section12Fn:   function(){

            },
            section13Fn:   function(){
                //카운터 프로그래밍
                //카운터1
                var n1       = 7800;
                var n2       = 9870;
                var n3       = 3500;
                var n4       = 1660;

                var cnt1     = 0;
                var cnt2     = 0;
                var cnt3     = 0;
                var cnt4     = 0;
                var $num1    = $('#section13 .num').eq(0);
                var $num2    = $('#section13 .num').eq(1);
                var $num3    = $('#section13 .num').eq(2);
                var $num4    = $('#section13 .num').eq(3);
                var $setId1  = null;
                var $setId2  = null;
                var $setId3  = null;
                var $setId4  = null;

                //정규표현식
                var regExp = /\B(?=(\d{3})+(?!\d))/g;

                function counterFn1(){
                    cnt1+=10;
                    if(cnt1>=7800){
                        clearInterval(setId1);
                        clearInterval(setId2);
                        clearInterval(setId3);
                        clearInterval(setId4);
                        $num1.html(n1.toString().replace(regExp,','));
                        $num2.html(n2.toString().replace(regExp,','));
                        $num3.html(n3.toString().replace(regExp,','));
                        $num4.html(n4.toString().replace(regExp,','));

                    }
                    $num1.html(cnt1.toString().replace(regExp,','));
       
                }
                setId1 = setInterval(counterFn1,12.82051282);

                //카운터2
                function counterFn2(){
                    cnt2+=10;
                    if(cnt2>=9870){
                        clearInterval(setId2);
                    }
                    $num2.html(cnt2.toString().replace(regExp,','));
                }
                setId2 = setInterval(counterFn2,10.13171226);

                //카운터3
                function counterFn3(){
                    cnt3+=10;
                    if(cnt3>=3500){
                        clearInterval(setId3);
                    }
                    $num3.html(cnt3.toString().replace(regExp,','));
                }
                setId3 = setInterval(counterFn3,28.57142857);

                 //카운터4
                 function counterFn4(){
                    cnt4+=10;
                    if(cnt4>=1660){
                        clearInterval(setId4);
                    }
                    $num4.html(cnt4.toString().replace(regExp,','));
                }
                setId4 = setInterval(counterFn4,60.24096386)



            },
            section14Fn:   function(){
            }
            
        }; //객체end

        brando.init(); //초기실행 함수 (brando 전체 메서드실행)

        
})(jQuery, window, document); //전달자 argument
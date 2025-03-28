

/* ㅡㅡㅡㅡㅡㅡㅡ햄버거메뉴 동작 ㅡㅡㅡㅡㅡ*/ 

$(function(){
   $(".ham_btn img").click(function(){
        $(".ham_menu").slideToggle("slow");
   });
    $(".ham_menu").hide();  /*햄버거 강제실행 버튼*/ 







/* ㅡㅡㅡㅡㅡㅡㅡ햄버거메뉴 스크롤시에 고정되도록 ㅡㅡㅡㅡㅡ*/ 

    $(window).scroll(function(){             /*스크롤시 발생하는 이벤트★★★*/ 
        var win=$(window).scrollTop();
        if(win>=200){
            $("#wrap").addClass("lnb_fix");
        }else{
            $("#wrap").removeClass("lnb_fix");
        }
    });



});







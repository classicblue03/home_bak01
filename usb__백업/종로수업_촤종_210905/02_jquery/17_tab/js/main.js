$(function(){
    $('.tab li').click(function(){
        let num = $(this).index();
        // $(this).addClass('on').siblings().removeClass('on');
        $('.tab li').removeClass('on');
        $(this).addClass('on');

        // tab 요소의 index값과 메뉴 리스트의 index값 매칭
        $('.tab_list .list').hide();
        $('.tab_list .list').eq(num).show(0);
    })

})
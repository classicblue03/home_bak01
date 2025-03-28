/*대상을 정확히모르니까 눌러진것에 컨텐츠를 받아서 인덱스로...
그래서 컨텐츠가 아닌변수로 받음*/

$(function () {

    var tab = $("#tab>li");
    var content = $("#content>div");

    tab.click(function () {
        var target = $(this); /*눌러진것*/
        var targetBtn = target.find(">a"); /*타켓의 하위중에서 li를 찾아내서 이게 on되어있으면 on시켜주고*/

        tab.find(">a").removeClass("on");
        targetBtn.addClass("on");
        /*li를 tab이라는 변수로받음 , 4개중 하나눌럿으면 그중 하나 클릭한것은 this
        this=타켓이됨 , li a가 on이 되어야 시트가 보여짐  , 타켓의 하위 a를 찾아라

         tab.find(">a") = 이전에 선택된 a로 선택된 on은 다 지울것이다*/


        var i = target.index(); /*인덱스를 찾아내서 찾아낸것은 eq로 받아주기*/


        content.css("display", "none");
        content.eq(i).css("display", "block");
    });

});//end





/*
$(function(){

    var tab=$("#tab>li");
    var content=$("#content>div");



    tab.click(function(){
        var target=$(this);
        var targetBtn=target.find(">a"); 하위태그들 중에서 a, a를 찾아서 타켓btn으로 만들기

        tab.find(">a").removeClass("on"); 이전게 되있는것들은 지우기
        targetBtn.addClass("on"); 현재거는 on시키기

        var i=target.index();  


    content.css("display","none");
    content.eq(i).css("display","block");
    */
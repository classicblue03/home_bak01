$(function(){
    var tabA=$(".tab>li>h2>a");
    var tabDiv=$(".tab>li>div");

    tabDiv.hide();
    tabA.on("mouseenter focus", function(){
        if(tabA.target){
            $(tabA.target).parent().next().hide();
            $(this).parent().next().show();
            imgOut(tabA.target);
            imgOver(this);
        }else{
            $(this).parent().next().show();
            imgOver(this);
        }
        tabA.target=this;
    });

    function imgOver(t){
        $(t).find("img").attr("src",$(t).find("img").attr("src").replace("out","over"));
    }
    function imgOut(t){
        $(t).find("img").attr("src",$(t).find("img").attr("src").replace("over","out"));
    }

    tabA.eq(0).mouseenter();
});
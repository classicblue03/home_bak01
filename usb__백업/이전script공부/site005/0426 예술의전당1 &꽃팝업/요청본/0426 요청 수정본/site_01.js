$(function(){

//log_popup
$("#log_popup_btn>a").click(function(){
    $("#log_popup").addClass("active");
});
$("#log_close").click(function(){
    $("#log_popup").removeClass("active");
});

//all_menu    
var state=false;
$("#open_bt").click(function(){
    $("#all_menu").toggle();
    if(!state){
        imgOff(this);
        state=false;
    }else{
        imgOn(this);
        state=true;
    }
    return false; // a링크 차단
});

$("#close_bt").on("click blur", function(){
    $("#all_menu").hide();
    imgOff("#open_bt");
    state=false;
});

function imgOff(t){
    var img=$(t).find("img");
    img.attr("src",img.attr("src").replace("on", "off"));
}
function imgOn(t){
    var img=$(t).find("img");
    img.attr("src",img.attr("src").replace("off", "on"));
}

});
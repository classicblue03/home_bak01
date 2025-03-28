$(function(){

$(".ham_btn img").click(function(){
  $(".ham_menu").slideToggle("slow");
});
$(".ham_menu").hide();

$(window).scroll(function(){
  var win=$(window).scrollTop();
  if(win>=200){
      $("#wrap").addClass("lnb_fix");
  }else{
      $("#wrap").removeClass("lnb_fix");
  }
});

});
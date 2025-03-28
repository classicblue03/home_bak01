//


$(function() {
  $(".ham_btn img").click(function() {
    $(".ham_menu").slideToggle("slow"); // 풀다운메뉴
  });
  $(".ham_menu").hide();
  // $(window).scroll(function () {
  //     var win = $(window).scrollTop();
  //     if (win >= 200) {
  //         $("#wrap").addClass("lnb_fix");
  //     } else {
  //         $("#wrap").removeClass("lnb_fix");
  //     }
  // });
});

// 1 햄버거 떨어지는거
// 2 위에 붙음
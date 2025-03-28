$(function() {
  $("#rolling_banner").flexisel({
    visibleItems: 5, //한번에 보여지는 갯수
    animationSpeed: 1000,
    autoPlay: true,
    autoPlaySpeed: 3000,
    pauseOnHover: true,
    enableResponsiveBreakpoints: true,
    responsiveBreakpoints: {
      portrait: {
        changePoint: 480,
        visibleItems: 1
      },
      landscape: {
        changePoint: 640,
        visibleItems: 2
      },
      tablet: {
        changePoint: 768, //태블릿size
        visibleItems: 3
      }
    }
  });
});//end
$(function (){
	$('.slick-top').slick({
		autoplay: true,
		autoplaySpeed: 2000,
		dots: true,	//pagerBtn
		arrows: true, //좌우버튼
		fade: true,
	});


	/*재생btn = hide
	   멈춤btn = 일시정지, 멈춤btn  없애고
	   재생btn = hshow*/

	$('.slide-play').hide();

	$('.slide-pause').click(function(){
		$('.slick-top').slick('slickPause')
		$(this).hide();
		$('.slide-play').show();
	});//end


	/*재생btn 클릭시 다시 재생하고
	   재생btn 없애고
	   멈춤btn show*/
	$('.slide-play').click(function(){
		$('.slick-top').slick('slickPlay')
		$(this).hide();
		$('.slide-pause').show();
	});
	

	//Multiple Items
    $('.slick-banner').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '60px',
        arrows : false,
      });

});//end
$(function(){
    //log_popup
    /*$("#log_popup_btn>a").click(function(){
        $("#log_popup").addClass("on");
    });
    $("#log_close").click(function(){
        $("#log_popup").removeClass("on");
    });
*/
    
    
    
    
    //all_menu
    var state=false;
    $("#open_bt").mouseover(function(){
        $("#all_menu").toggle();
        if(!state){
            imgOff(this);
            state=true;
        }else{
            imgOn(this);
            state=false;
        }
        return false;
    });
    
    $("#close_bt").mouseleave(function(){
        $("#all_menu").hide();
        imgOn("#open_bt");
        state=false;
    });

    /*$("#close_bt").on("click blur", function(){
        $("#all_menu").hide();
        imgOn("#open_bt");
        state=false;
    });*/

    function imgOff(t){
        var img=$(t).find("img");
        img.attr("src",img.attr("src").replace("on", "off"));
    }
    function imgOn(t){
        var img=$(t).find("img");
        img.attr("src",img.attr("src").replace("off", "on"));
    }
	
	
	//visual
	$('.visual').each(function () {

        var $container = $(this);                               
        var $slideGroup = $container.find('.slides');   
        var $slides = $slideGroup.find('.slide');               
        var $nav = $container.find('.slide_nav');             
        var $indicator = $container.find('.slide_indicator'); 
            
        var slideCount = $slides.length; 
        var indicatorHTML = '';          
        var currentIndex = 0;            
		var easing = 'easeInOutExpo'; 
        var timer;                       

        $slides.each(function (i) {
            $(this).css({ left: 100 * i + '%' });
            indicatorHTML += '<a href="#">' + (i + 1) + '</a>';
        });

        $indicator.html(indicatorHTML);
    

        function goToSlide (index) {
            $slideGroup.animate({ left: - 100 * index + '%' }, 500, easing);
            currentIndex = index;
            updateNav();
        }

        function updateNav () {
            var $navPrev = $nav.find('.prev'); 
            var $navNext = $nav.find('.next'); 
            if (currentIndex === 0) {
                $navPrev.addClass('disabled');
            } else {
                $navPrev.removeClass('disabled');
            }
            
            if (currentIndex === slideCount - 1) {
                $navNext.addClass('disabled');
            } else {
                $navNext.removeClass('disabled');
            }
            
            $indicator.find('a').removeClass('active');
			$indicator.find('a').eq(currentIndex).addClass('active');
        }
    
        
        function startTimer () {
            
            timer = setInterval(function () {
                
                var nextIndex = (currentIndex + 1) % slideCount;
                goToSlide(nextIndex);
            }, 3000);
        }

        function stopTimer () {
            clearInterval(timer);
        }
  

    
        $nav.on('click', 'a', function (event) {
            event.preventDefault();
            if ($(this).hasClass('prev')) {
                goToSlide(currentIndex - 1);
            } else {
                goToSlide(currentIndex + 1);
            }
        });

        $indicator.on('click', 'a', function (event) {
            event.preventDefault();
            if (!$(this).hasClass('active')) {
                goToSlide($(this).index());
            }
        });

        $container.on({
            mouseenter: stopTimer,
            mouseleave: startTimer
        });

        goToSlide(currentIndex);

        startTimer();

    });







});
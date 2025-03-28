



/*
each 반복메서드

*/




$(function(){
    var menu = $('#top_menu >ul>li');
    var contents = $('#contents>div');

    menu.click(function(){
       event.preventDefault();
       var tg = $(this);
       var i =taget.index();
       var section = contents.eq(i);
       var tt = section.offset().top;
       $('html, body').stop().animate9({scrollTop:tt});
    });

    $(window).scroll(function(){
        var sct = $(window).scrollTop();

        contents.each(function(){
            var taget = $(this);
            var i = target.index();
            
            if(target.offset().top <= sct){
                menu.removeClass('on');
                menu.eq(i).addClass('on');
            }
        });
    });

  


});
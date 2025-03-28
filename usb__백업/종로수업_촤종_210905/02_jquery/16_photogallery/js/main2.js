$(function(){
    // $('ul li a').mouseenter(function(){
    //     let pic = $(this).attr('href');
    //     $('.big_photo img')
    //     .attr({src:pic})
    //     .css('opacity', 0)
    //     .animate({'opacity':1}, 500);
    // })

    // $('ul li a').on('click',function(){
    //     let pic = $(this).attr('href');
    //     $('.big_photo>img')
    //     .attr({src:pic})
    //     .css('opacity', 0)
    //     .animate({'opacity':1}, 500);
    //     return false; //<a>태그의 본래 기능 false
    // })


    $('ul li a').click(function(){
        let pic = $(this).attr('href');
        $('.big_photo>img')
        .attr({src:pic})
        .css('opacity', 0)
        .animate({'opacity':1}, 500);
        return false; //<a>태그의 본래 기능 false
    })


})
$(function(){
    // $('ul li a').mouseenter(function(){
    //     //attr('속성')
    //     let num = $(this).attr('href');
    //     // console.log(num);

    //     $('.big_photo img')
    //     .attr({src:num})
    //     .css('opacity' , 0)
    //     .animate({'opacity' : 1}, 500);
    // })


    $('ul li a').mouseenter(function(){
        //attr('속성')
        let num = $(this).attr('href');
        // console.log(num);

        $('.big_photo img')
        .attr({src:num})
        .css('opacity' , 0)
        .animate({'opacity' : 1}, 500);
    })


})
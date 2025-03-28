$(function () {
    $('ul li').click(function () {
        //this키워드는 여러개중에 하나를 선택했을때 선택된 요소를 기억한다
        let num = $(this).index(); //몇번째를 클릭했는지 index값(0부터시작)을 가지고 다양한 구현이 가능
        console.log(num);
        switch (num) {
            case 0:
                $(this).find('a').css('background', 'red')
                .animate({'margin-top':400})
                .animate({'margin-top':0}, function(){
                    $(this).css({'background':'grey'})});
                break;
            case 1: 
                $(this).find('a').css('background', 'orange')
                .animate({'margin-top':400})
                .animate({'margin-top':0}, function(){
                    $(this).css({'background':'grey'})});
                break;   
            case 2: 
                $(this).find('a').css('background', 'yellow')
                .animate({'margin-top':400})
                .animate({'margin-top':0}, function(){
                    $(this).css({'background':'grey'})});
                break;  
            case 3: 
                $(this).find('a').css('background', 'green')
                .animate({'margin-top':400})
                .animate({'margin-top':0}, function(){
                    $(this).css({'background':'grey'})});
                break;  
            case 4: 
                $(this).find('a').css('background', 'blue')
                .animate({'margin-top':400})
                .animate({'margin-top':0}, function(){
                    $(this).css({'background':'grey'})});
                break;
            case 5: 
                $(this).find('a').css('background', 'navy')
                .animate({'margin-top':400})
                .animate({'margin-top':0}, function(){
                    $(this).css({'background':'grey'})});
                break;
            case 6: 
                $(this).find('a').css('background', 'purple')
                .animate({'margin-top':400}, 1000, 'easeOutBounce') //바운스 적용해봄
                .animate({'margin-top':0}, 1000, 'easeOutBounce', function(){
                    $(this).css({'background':'grey'})});
                break;
            default:
                break;
        }

    //     if(num == 0){
    //         $(this).find('a')
    //         .css('background', 'red')
    //         .animate({'margin-top':400})
    //         .animate({'margin-top':0}, function(){
    //         $(this).css({'background':'grey'})
    //         });
    //     }else if(num == 1){
    //         $(this).find('a')
    //         .css('background', 'orange')
    //         .animate({'margin-top':400})
    //         .animate({'margin-top':0}, function(){
    //             $(this).css({'background':'grey'})
    //             });
    //     }else if(num == 2){
    //         $(this).find('a')
    //         .css('background', 'yellow')
    //         .animate({'margin-top':400})
    //         .animate({'margin-top':0}, function(){
    //             $(this).css({'background':'grey'})
    //             });
    //     }else if(num == 3){
    //         $(this).find('a')
    //         .css('background', 'green')
    //         .animate({'margin-top':400})
    //         .animate({'margin-top':0}, function(){
    //             $(this).css({'background':'grey'})
    //             });
    //     }else if(num == 4){
    //         $(this).find('a')
    //         .css('background', 'blue')
    //         .animate({'margin-top':400})
    //         .animate({'margin-top':0}, function(){
    //             $(this).css({'background':'grey'})
    //             });
    //     }else if(num == 5){
    //         $(this).find('a')
    //         .css('background', 'navy')
    //         .animate({'margin-top':400})
    //         .animate({'margin-top':0}, function(){
    //             $(this).css({'background':'grey'})
    //             });
    //     }else if(num == 6){
    //         $(this).find('a')
    //         .css('background', 'purple')
    //         .animate({'margin-top':400})
    //         .animate({'margin-top':0}, function(){
    //             $(this).css({'background':'grey'})
    //             });
    //     }
    })

})
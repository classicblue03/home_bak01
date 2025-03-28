$(function(){
    function time(){
        var now = new Date();
        let hour = now.getHours();
        let min = now.getMinutes();
        let sec = now.getSeconds();
        let msec = now.getMilliseconds();
        msec = Math.floor(msec/10); //3자리로 나오는 밀리세컨 2자리로 만들어주기

        let year = now.getFullYear();
        let month = now.getMonth();
        let date = now.getDate();
        let day = now.getDay();

        if(day == 0){
            day = '일'
        }else if(day == 1){
            day = '월'
        }else if(day == 2){
            day = '화'
        }else if(day == 3){
            day = '수'
        }else if(day == 4){
            day = '목'
        }else if(day == 5){
            day = '금'
        }else if(day == 6){
            day = '토'
        }

        // console.log(`${hour} 시 ${min} 분 ${sec} 초 ${msec}`);

        // $('.hour').text(hour);
        // $('.min').text(min);
        // $('.sec').text(sec);
        // $('.msec').text(msec);

        //자리수 2자리로 만들어주는 함수
        function digit(n){
            if(n<10){
                n = '0'+n;
                return n;
            }else{ 
                return n;
            }
        }

        var dhour = digit(hour);
        var dmin = digit(min);
        var dsec = digit(sec);
        var dmsec = digit(msec);

        $('.hour').text(dhour);
        $('.min').text(dmin);
        $('.sec').text(dsec);
        $('.msec').text(dmsec);

        $('.year').text(year);
        $('.month').text(month +1);
        $('.date').text(date);
        $('.dd').text(day);
    }
    
    setInterval(function(){
        time();
    }, 10) //milsec단위가 10


});
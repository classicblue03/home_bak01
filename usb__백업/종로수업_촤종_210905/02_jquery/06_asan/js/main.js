$(function () {

    let btn_close = $('.btn_close'),
        m_gnb = $('.m_gnb'),
        m_btn = $('.m_btn');

    btn_close.click(function () {
        m_gnb.animate({
            'left': '-100%'
        }, 300);
    });

    m_btn.click(function () {
        m_gnb.animate({
            'left': 0
        }, 300);
    });



})
let colorWrap = document.querySelector('.colorful');
let colorList = colorWrap.querySelectorAll('li');
let lastList = colorList[colorList.length - 1];
let times = 1000;
let colorOn = "on";
i = 0;

setInterval(() => {
    if (lastList.classList.contains(colorOn)) {
        i = 0;
    }
    colorList.forEach(el => {
        el.classList.remove(colorOn)
    })
    colorList[i].classList.add(colorOn);
    i++;
}, times);

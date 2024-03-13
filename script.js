const item = document.querySelectorAll('.slider .slider-wrap .slider-line .item');
const sliderLine = document.querySelector('.slider .slider-wrap .slider-line');
let count = 0;
let width;

function init() {
    console.log('resize');
    width = document.querySelector('.slider .slider-wrap').offsetWidth;
    sliderLine.style.width = width * item.length + 'px';
    item.forEach( item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider()
    console.log(width);
}

window.addEventListener('resize', init);
init();

document.querySelector('.slider-next').addEventListener('click', function(){
    count++;
    if (count >= item.length) {
        count = 0;
    };
    rollSlider()
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = item.length - 1;
    }
    rollSlider();
});

function rollSlider(){
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
};
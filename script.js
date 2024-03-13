const item = document.querySelectorAll('.slider .slider-wrap .slider-line .item');
const image = document.querySelectorAll('.slider .slider-wrap .slider-line img');
const sliderLine = document.querySelector('.slider-line');
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
    console.log(width);
}

window.addEventListener('resize', init);

document.querySelector('.slider-next').addEventListener('click', function(){
    count++;
    if (count >= image.length) {
        count = 0;
    };
    rollSlider()
});

function rollSlider(){
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
};
const switchPrice = document.querySelector('#switchPrice');
const spanButton = document.querySelector('.spanBut');
const spanON = document.querySelector('.spanButOn');
const spanOFF = document.querySelector('.spanButOff');
var time = document.querySelector('.time');

switchPrice.addEventListener('click', function () {
    console.log("How dare you!");

    if (spanButton.classList.contains('spanButOn')){
        spanButton.classList.remove('spanButOn');
        switchPrice.classList.remove('backOn');
        switchPrice.classList.add('backOff');
        spanButton.classList.add('spanButOff');
        time.textContent = "month";
    } else { //turn switch on
        spanButton.classList.remove('spanButOff');
        spanButton.classList.add('spanButOn');
        switchPrice.classList.add('backOn');
        switchPrice.classList.remove('backOff');
        time.textContent = "year";
    }
});

var tl = gsap.timeline({defaults: {duration: 1}});

tl.from('.animation',{duration: 1.3, x: -200, scaleY: .20, ease: "elastic.out", opacity: 0})
    .from('.attribution', {duration: 1, x:100, ease:"back.out",opacity: 0 }, "-=.8");


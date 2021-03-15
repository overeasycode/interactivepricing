const slider = document.getElementById('slider');
let firstText = document.getElementById('firstText');
const price = document.getElementById('price');
const checked = document.querySelector('.spanButOn');
const unchecked = document.querySelector('.spanButOff');
const spanBut = document.querySelector('.spanBut');
const switcher = document.getElementById('switchPrice');



slider.value = firstText.innerHTML;


/* old code
slider.oninput = function(){ 
    if (slider.value == 0){
        console.log("It's working!");
        firstText.innerHTML = "10K";
        price.innerHTML = '8';
    } else if (slider.value == 50){
        firstText.innerHTML = "50K";
        price.innerHTML = "12";
    } else if (slider.value == 100){
        firstText.innerHTML = "100K";
        price.innerHTML = "16";
    } else if (slider.value == 150){
        firstText.innerHTML = "500K";
        price.innerHTML = "24";
    } else if (slider.value == 200){
        firstText.innerHTML = "1M";
        price.innerHTML = "36";
    }
}
*/

switcher.addEventListener("click", priceUpdater); // multplies price
slider.addEventListener("input", priceUpdater); // changes pricetextContent
;
function priceUpdater(){
    if (slider.value == 0){
        if (time.textContent == "year"){
            price.textContent = `${(8 - (8 * .25)) * 12}`;

        } else {
            price.textContent = 8;
        }
        firstText.innerHTML = "10K";
    }
    if (slider.value == 50){
        if (time.textContent == "year"){
            price.textContent = 108;
        }
        else {
            price.textContent = 12;
        }
        firstText.textContent = "50K";
    }
    
    if (slider.value == 100){
        if (time.textContent == "year"){
            price.textContent = 144;
        }
        else {
            price.textContent = 16;
        }
        firstText.textContent = "100K";
    }
    
    if (slider.value == 150){
        if (time.textContent == "year"){
            price.textContent = 216;
        }
        else {
            price.textContent = 24;
        }
        firstText.textContent = "500K";
    }
    
    if (slider.value == 200){
        if (time.textContent == "year"){
            price.textContent = 324;
        }
        else {
            price.textContent = 36;
        }
        firstText.textContent = "1M";
    }
    
   
}




const body = document.querySelector('body');
const button = document.querySelector('button');
const colors = ['pink', 'crimson','red', 'green', 'yellow','purple'];
const result = document.querySelector('#result');
const radio1 = document.querySelector('#radio1');
const radio2 = document.querySelector('#radio2');
const radios = document.querySelectorAll('input');
let func;

 
        // document.body.addEventListener('change', function (e) {

        //     switch (e.target.id) {
        //         case 'radio1':
        //             func=changeBackgroundWithRGBColor();
        //             break;
        //         case 'radio2':
        //             func=changeBackgroundWithTextColor();
        //             break;
        //     }
        // });

if(radio1.checked === true) {
    func=changeBackgroundWithRGBColor;
}else if(radio2.checked === true) {
    func=changeBackgroundWithTextColor;
}
button.addEventListener('click', func, false);
function changeBackgroundWithTextColor() {
    const selectedNumber = Math.floor(Math.random()*colors.length);
    const selectedColor = colors[selectedNumber];
    body.style.background=selectedColor;
    result.innerHTML = selectedColor;
}
function changeBackgroundWithRGBColor() {
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);
    const selectedColor = "rgb("+red+","+green+","+blue+")";
    body.style.background = selectedColor;
    result.innerHTML = selectedColor;
    
}

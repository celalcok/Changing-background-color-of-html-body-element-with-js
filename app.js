const body = document.querySelector('body');
const button = document.querySelector('button');
const colors = ['pink', 'blue','red', 'green', 'yellow','purple'];
const result = document.querySelector('#result');
const radio1 = document.querySelector('#radio1');
const radio2 = document.querySelector('#radio2');
const inorder = document.querySelector('#in_order');
const inorderCheck = document.querySelector('#in_order_check');
const lblInOrder = document.querySelector('#lbl_in_order');
let func;
let number=0;
 
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
    inorder.classList.remove('show');
    inorder.classList.add('hidden');

}else if(radio2.checked === true) {
    inorder.classList.add('show');
    inorder.classList.remove('hidden');
    func=changeBackgroundWithTextColor;
    
}
button.addEventListener('click', func);


function changeBackgroundWithTextColor() {
    let selectedNumber;
    if(inorderCheck.checked === true){
       selectedNumber = number;
       lblInOrder.innerHTML="In Order (" + number+")";
       console.log("order");
       number++;
       if(number >= colors.length){
           number = 0;
        }
    }else{
        lblInOrder.innerHTML="In Order ";
        selectedNumber = Math.floor(Math.random()*colors.length);
        console.log("random");
    }
    const selectedColor = colors[selectedNumber];
    body.style.background = selectedColor;
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

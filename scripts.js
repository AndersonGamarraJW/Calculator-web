let textWindow = '0';
console.log(textWindow);

const windowCalculator = document.querySelector('.window-calculator');
//windowCalculator.textContent = textWindow;
const numberButton = document.querySelector('.number');
const numbersButtons = document.querySelectorAll('.number');

console.log(numberButton.value)
console.log(windowCalculator.textContent);

numbersButtons.forEach((buttonNumber)=>{
    buttonNumber.addEventListener('click',(e)=>{
        textWindow = textWindow + e.target.value;
        console.log(textWindow);
        //windowCalculator.textContent = textWindow;
    });
});
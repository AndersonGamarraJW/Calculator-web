let textWindow = '';
let countNumberInsert = 0;
let typeOperation = '';
let firstNumber = '';
let secondNumber = '1';
let result = 0;
console.log(textWindow);

const windowCalculator = document.querySelector('.window-calculator');
const windowCalculatorContent = document.querySelector('.text-content');
//windowCalculator.textContent = textWindow;
const numberButton = document.querySelector('.number');
const numbersButtons = document.querySelectorAll('.number');
const divisionOperationButton = document.getElementById('division-operation-id');
const multiplyOperationButton = document.getElementById('multiply-operation-id');
const sustractionOperationButton = document.getElementById('sustraction-operation-id');
const equalsOperationButton = document.getElementById('equals-operation-id');
const addOperationButton = document.getElementById('add-operation-id');
const ceButton = document.getElementById('ce');

console.log(divisionOperationButton);
console.log(multiplyOperationButton);
console.log(sustractionOperationButton);
console.log(equalsOperationButton);
console.log(addOperationButton);
console.log(numberButton.value)
console.log(windowCalculator.textContent);

//Add events in the buttons
numbersButtons.forEach((buttonNumber)=>{
    buttonNumber.addEventListener('click',(e)=>{
        textWindow = textWindow + e.target.value;
        windowCalculatorContent.textContent = textWindow;
    });
});

ceButton.addEventListener('click',()=>{
    eraseWindowCalculator();
    firstNumber = '';
    secondNumber = '';
    textWindow = '';
    typeOperation = '';
});

divisionOperationButton.addEventListener('click',()=>{
    if (typeOperation !== ''){
        secondNumber = textWindow;
        console.log(textWindow);
        console.log('first: ',firstNumber);
        console.log('second: ',secondNumber);   
        result = operationEquals(typeOperation,firstNumber,secondNumber);
        console.log(result);
        textWindow = result;
        windowCalculatorContent.textContent = textWindow;
    }
    typeOperation = 'division';
    firstNumber = textWindow;
    //eraseWindowCalculator();
    textWindow = '';
    
});
multiplyOperationButton.addEventListener('click',()=>{
    if (typeOperation !== ''){
        secondNumber = textWindow;
        console.log(textWindow);
        console.log('first: ',firstNumber);
        console.log('second: ',secondNumber);   
        result = operationEquals(typeOperation,firstNumber,secondNumber);
        console.log(result);
        textWindow = result;
        windowCalculatorContent.textContent = textWindow;
    }
    typeOperation = 'multiply';
    firstNumber = textWindow;
    //eraseWindowCalculator();
    textWindow = '';
});
sustractionOperationButton.addEventListener('click',()=>{
    if (typeOperation !== ''){
        secondNumber = textWindow;
        console.log(textWindow);
        console.log('first: ',firstNumber);
        console.log('second: ',secondNumber);   
        result = operationEquals(typeOperation,firstNumber,secondNumber);
        console.log(result);
        textWindow = result;
        windowCalculatorContent.textContent = textWindow;
    }
    typeOperation = 'sustraction';
    firstNumber = textWindow;
    //eraseWindowCalculator();
    textWindow = '';
});

equalsOperationButton.addEventListener('click',()=>{
    secondNumber = textWindow;
    result = operationEquals(typeOperation,firstNumber,secondNumber);
    console.log(result);
    textWindow = result;
    windowCalculatorContent.textContent = textWindow;
});
addOperationButton.addEventListener('click',()=>{
    if (typeOperation !== ''){
        secondNumber = textWindow;
        console.log(textWindow);
        console.log('first: ',firstNumber);
        console.log('second: ',secondNumber);   
        result = operationEquals(typeOperation,firstNumber,secondNumber);
        console.log(result);
        textWindow = result;
        windowCalculatorContent.textContent = textWindow;
    }
    typeOperation = 'add';
    firstNumber = textWindow;
    //eraseWindowCalculator();
    textWindow = '';
});

function operationEquals(option,a,b){
    switch (option) {
        case 'division':
            return division(a,b);           
            break;

        case 'multiply':
            return multiply(a,b);
            break;
        
        case 'add':
            return add(a,b);
            break;
        
        case 'sustraction':
            return sustraction(a,b);
            break;

        default:
            break;
    }
}
function eraseWindowCalculator(){
    windowCalculatorContent.textContent=' ';
}
function division(a,b){
    return Number(a)/Number(b);
}
function multiply(a,b){
    return Number(a)*Number(b);
}
function add(a,b){
    return Number(a)+Number(b);
}
function sustraction(a,b){
    return Number(a)-Number(b);
}

function operate(a,b,operation){
    if(a != 0){
        return operation(a,b);
    }
}

// Variable assignment
const zeroBtn = document.getElementById('zero')
const oneBtn = document.getElementById('one')
const twoBtn = document.getElementById('two')
const threeBtn = document.getElementById('three')
const fourBtn = document.getElementById('four')
const fiveBtn = document.getElementById('five')
const sixBtn = document.getElementById('six')
const sevenBtn = document.getElementById('seven')
const eightBtn = document.getElementById('eight')
const nineBtn = document.getElementById('nine')
const numBtnList = [zeroBtn, oneBtn, twoBtn, threeBtn, fourBtn, fiveBtn, sixBtn, sevenBtn, eightBtn, nineBtn]
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multiplyBtn = document.getElementById('multiply')
const divideBtn = document.getElementById('divide')
const operBtnList = [plusBtn, minusBtn, multiplyBtn, divideBtn]
const equalBtn = document.getElementById('equal')
const dotBtn = document.getElementById('dot')
const clearBtn = document.getElementById('clear')
const backspaceBtn = document.getElementById('backspace')

const display1 = document.getElementById('display-1')
const display2 = document.getElementById('display-2')

let currentOperator
let currentNumber
let pastNumber

// Math operators
function add(a, b) {
    return a + b;
}
function substract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
            break;
    
        case '-':
            return substract(a, b);
            break;
    
        case '*':
            return multiply(a, b);
            break;
    
        case '/':
            return divide(a, b);
            break;
    
        default:
            break;
    }
}

// Event listener for buttons
for (let i = 0; i < numBtnList.length; i++) {
    numBtnList[i].addEventListener('click', () => {
        if (!display1.textContent) {
            currentNumber = numBtnList[i].textContent;
            display1.textContent = currentNumber; 
        } else {
            currentNumber += numBtnList[i].textContent;
            display1.textContent = currentNumber;
        }
    });  
}

clearBtn.addEventListener('click', () => {
    display1.textContent = undefined;
    display2.textContent = undefined;
    currentNumber = undefined;
    pastNumber = undefined;
    currentOperator = undefined;
});
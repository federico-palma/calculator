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
const plusMinus = document.getElementById('plus/minus')

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
            if (b == 0) {
                return "Don't divide by 0 you donkey."
            }
            return divide(a, b);
            break;
    
        default:
            break;
    }
}

// Event listener for buttons
for (let i = 0; i < numBtnList.length; i++) {
    numBtnList[i].addEventListener('click', () => {
        if (!currentNumber) {
            currentNumber = numBtnList[i].textContent;
            display1.textContent = currentNumber; 
        } else {
            currentNumber += numBtnList[i].textContent;
            display1.textContent = currentNumber;
        }
    });  
}

dotBtn.addEventListener('click', () => {
    if (currentNumber == null) {
        currentNumber = '0.'
        display1.textContent = currentNumber;
    } else if (!currentNumber.includes('.')){
        currentNumber += '.';
        display1.textContent = currentNumber;
    };
});

for (let i = 0; i < operBtnList.length; i++) {
    operBtnList[i].addEventListener('click', () => {
        if (pastNumber == null) {
            currentOperator = operBtnList[i].textContent;
            pastNumber = currentNumber;
            display2.textContent = pastNumber + ' ' + currentOperator;
            currentNumber = null;
            display1.textContent = null;
        } else {
            let result = operate(currentOperator, parseFloat(pastNumber), parseFloat(currentNumber));
            currentOperator = operBtnList[i].textContent;
            pastNumber = result;
            currentNumber = null;
            display2.textContent = result + ' ' + currentOperator;
            display1.textContent = null;
        };
    });
};

equalBtn.addEventListener('click', () => {
    if (pastNumber != null) {
        let result = operate(currentOperator, parseFloat(pastNumber), parseFloat(currentNumber));
        pastNumber = null;
        currentNumber = result;
        display2.textContent = null;
        display1.textContent = result;
    }
});

clearBtn.addEventListener('click', () => {
    display1.textContent = null;
    display2.textContent = null;
    currentNumber = null;
    pastNumber = null;
    currentOperator = null;
});

plusMinus.addEventListener('click', () => {
    if (currentNumber == null || !currentNumber.includes('-')) {
        currentNumber == null ? currentNumber = '-' : currentNumber = '-' + currentNumber;
        display1.textContent = currentNumber;
    } else {
        currentNumber = currentNumber.slice(1);
        display1.textContent = currentNumber;
    }
});

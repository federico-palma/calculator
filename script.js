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

function updateDisplay1() {
    display1.textContent = currentNumber;
}

// Event listener for buttons
for (let i = 0; i < numBtnList.length; i++) {
    numBtnList[i].addEventListener('click', () => {
        if (!currentNumber) {
            currentNumber = numBtnList[i].textContent;
            updateDisplay1()
        } else {
            currentNumber += numBtnList[i].textContent;
            updateDisplay1()
        }
    });  
}

dotBtn.addEventListener('click', () => {
    if (currentNumber == null) {
        currentNumber = '0.'
        updateDisplay1()
    } else if (!currentNumber.includes('.')){
        currentNumber += '.';
        updateDisplay1()
    };
});

for (let i = 0; i < operBtnList.length; i++) {
    operBtnList[i].addEventListener('click', () => {
        if (currentNumber == null) {currentNumber = display1.textContent;}
        if (pastNumber == null) {
            currentOperator = operBtnList[i].textContent;
            pastNumber = currentNumber;
            currentNumber = null;
            updateDisplay1()
            display2.textContent = pastNumber + ' ' + currentOperator;
        } else {
            let result = operate(currentOperator, parseFloat(pastNumber), parseFloat(currentNumber));
            currentOperator = operBtnList[i].textContent;
            pastNumber = result;
            currentNumber = null;
            updateDisplay1()
            display2.textContent = result + ' ' + currentOperator;
        };
    });
};

equalBtn.addEventListener('click', () => {
    if (pastNumber != null && currentNumber != null) {
        let result = operate(currentOperator, parseFloat(pastNumber), parseFloat(currentNumber));
        pastNumber = null;
        display2.textContent = pastNumber
        currentNumber = result;
        updateDisplay1()
        currentNumber = null;
    }
});

clearBtn.addEventListener('click', () => {
    currentNumber = null;
    pastNumber = null;
    display2.textContent = pastNumber;
    currentOperator = null;
    updateDisplay1()
});

backspaceBtn.addEventListener('click', () => {
    if (currentNumber) {
        currentNumber = currentNumber.slice(0, -1);
        updateDisplay1()
    }
});

plusMinus.addEventListener('click', () => {
    if (currentNumber == null || !currentNumber.includes('-')) {
        currentNumber == null ? currentNumber = '-' : currentNumber = '-' + currentNumber;
        updateDisplay1()
    } else {
        currentNumber = currentNumber.slice(1);
        updateDisplay1()
    }
});

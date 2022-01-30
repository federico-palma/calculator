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
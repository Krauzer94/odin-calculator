// Functions for each math operation
// Add, subctract, multiply and divide
// Test tem directly into the console

// Add operation
function add(a, b) {
    return a + b;
}

// Subtract operation
function sub(a, b) {
    return a - b;
}

// Multiply operation
function mul(a, b) {
    return a * b;
}

// Divide operation
function dvd(a, b) {
    return a / b;
}

// Two number math operation / operand
function operate(op, a, b) {
    let res = 0; // For later return
    a = Number(firstNumber);
    op = operandSymbol;
    b = Number(secondNumber);

    switch (op) {
        case '+':
            res = add(a, b);
            return alert(`${a} ${op} ${b} = ${res}`);
            break;
        case '-':
            res = sub(a, b);
            return alert(`${a} ${op} ${b} = ${res}`);
            break;
        case '*':
            res = mul(a, b);
            return alert(`${a} ${op} ${b} = ${res}`);
            break;
        case '/':
            res = dvd(a, b);
            return alert(`${a} ${op} ${b} = ${res}`);
            break;
    }
}

// Validating
// operate();

// Reset screen values and display
const clearBtn = document.querySelector('.clear-btn');
clearBtn.addEventListener('click', () => {
    calcDisplay.textContent = '';
    calcDisplayValue = [];
    operDisplay.textContent = '';
    operDisplayValue = [];
});

// Erase single inputted digits
const deleteBtn = document.querySelector('.delete-btn');
deleteBtn.addEventListener('click', () => {
    calcDisplay.textContent = calcDisplay.textContent.slice(0, -1);
    calcDisplayValue = calcDisplayValue.slice(0, -1);
});

// Store display input values
let calcDisplayValue = [];

// Populate the display screen
const calcDisplay = document.querySelector('.calc-display');
const digitNumbers = document.querySelectorAll('#digit-numbers');
digitNumbers.forEach(element => {
    element.addEventListener('click', () => {
        // Validate digit limit
        if (calcDisplayValue.length < 10) {
            calcDisplayValue = calcDisplay.textContent + element.textContent;
            calcDisplay.textContent = calcDisplayValue;
        } else {
            alert('No more digit space!');
        }
    });
});

// Display current input
let operDisplayValue = [];

// Numbers and operator values storage
let firstNumber = [], operandSymbol = '', operatorSymbol = [];

// Display for operator and operand
const operDisplay = document.querySelector('.oper-display');
const digitSymbols = document.querySelectorAll('#digit-symbols');
digitSymbols.forEach(element => {
    element.addEventListener('click', () => {
        operDisplayValue = calcDisplay.textContent + element.textContent;
        operDisplay.textContent = operDisplayValue;

        // Trim number / operator values
        firstNumber = calcDisplayValue;
        operandSymbol = operDisplayValue[operDisplayValue.length -1];

        // Reset display value input
        calcDisplay.textContent = '';
        calcDisplayValue = [];
    });
});

// TODO Finish the math operation
const digitEquals = document.querySelector('#digit-equals');
digitEquals.addEventListener('click', () => {
    // Trim second number for operation
    secondNumber = calcDisplayValue;
    operate(firstNumber, operandSymbol, secondNumber);
});
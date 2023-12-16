// Possible math operations
function add(a, b) { return a + b; } // Add operation
function sub(a, b) { return a - b; } // Subtract operation
function mul(a, b) { return a * b; } // Multiply operation
function dvd(a, b) { return a / b; } // Divide operation

// Two numbers operation
function operate(a, op, b) {
    let res = 0; // For later return
    a = Number(firstNumber);
    op = operandSymbol;
    b = Number(secondNumber);
    switch (op) {
        case '+':
            res = add(a, b);
            return alert(`${a} ${op} ${b} = ${res}`);
        case '-':
            res = sub(a, b);
            return alert(`${a} ${op} ${b} = ${res}`);
        case '*':
            res = mul(a, b);
            return alert(`${a} ${op} ${b} = ${res}`);
        case '/':
            res = dvd(a, b);
            return alert(`${a} ${op} ${b} = ${res}`);
    }
}

// Reset screen values
const clearBtn = document.querySelector('.clear-btn');
function clearButton() {
    calcDisplay.textContent = '';
    calcDisplayValue = [];
    operDisplay.textContent = '';
    operDisplayValue = [];
} clearBtn.addEventListener('click', () => { clearButton(); });

// Erase single digits
const deleteBtn = document.querySelector('.delete-btn');
function deleteButton() {
    calcDisplay.textContent = calcDisplay.textContent.slice(0, -1);
    calcDisplayValue = calcDisplayValue.slice(0, -1);
} deleteBtn.addEventListener('click', () => { deleteButton() });

// Populate the display screen
let calcDisplayValue = []; // Store display input values
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

// Display for operator and operand
let operDisplayValue = []; // Display current input
let firstNumber = [];      // Store first number value
let operandSymbol = '';    // Store operator value
let operatorSymbol = [];   // Display operator symbol
const operDisplay = document.querySelector('.oper-display');
const digitSymbols = document.querySelectorAll('#digit-symbols');
digitSymbols.forEach(element => {
    element.addEventListener('click', () => {
        operDisplayValue = calcDisplay.textContent + element.textContent;
        operDisplay.textContent = operDisplayValue;
        // Trim number and operator values
        firstNumber = calcDisplayValue;
        operandSymbol = operDisplayValue[operDisplayValue.length - 1];
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
// Possible math operations
function add(a, b) { return a + b; } // Add operation
function sub(a, b) { return a - b; } // Subtract operation
function mul(a, b) { return a * b; } // Multiply operation
function dvd(a, b) { return a / b; } // Divide operation

// Two numbers operation
function operate(a, op, b) {
    let res = 0; // For later return
    a = Number(firstNumber);
    op = operatorValue;
    b = Number(secondNumber);
    switch (op) {
        case '+':
            return res = add(a, b);
        case '-':
            return res = sub(a, b);
        case 'x':
            return res = mul(a, b);
        case '÷':
            return res = dvd(a, b);
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

// Initialize operation variables
let operDisplayValue = []; // Display current operation
let firstNumber = [];      // Store first number value
let secondNumber = [];     // Store second number value
let operatorValue = [];    // Store operator value
let operateResult = [];    // Store operation result

// Two number operation
const operDisplay = document.querySelector('.oper-display');
const digitSymbols = document.querySelectorAll('#digit-symbols');
digitSymbols.forEach(element => {
    element.addEventListener('click', () => {
        if (element.textContent == '=') {
            secondNumber = calcDisplayValue;
            operateResult = operate(firstNumber, operatorValue, secondNumber);
            operDisplay.textContent = `${firstNumber}${operatorValue}${secondNumber}=`;
            calcDisplay.textContent = `${operateResult}`;
        } else {
            operDisplayValue = calcDisplay.textContent + element.textContent;
            operDisplay.textContent = operDisplayValue;
            // Trim number and operator values
            firstNumber = calcDisplayValue;
            operatorValue = operDisplayValue[operDisplayValue.length - 1];
            // Reset display value input
            calcDisplay.textContent = '';
            calcDisplayValue = [];
        }
    });
});
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

// Two number math operation
function operate(op, a, b) {
    let res = 0; // For later return
    a = Number(prompt('First number:'));
    op = prompt('Chose one operation:\n( + ) for a sum\n( - ) for a subtraction\n( * ) for a multiplication\n( / ) for a division');
    b = Number(prompt('Second number:'));

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

// Store display value
let calcDisplayValue = [];

// Populate the display
const calcDisplay = document.querySelector('.calc-display');
const digitNumbers = document.querySelectorAll('#digit-numbers, #digit-symbols');
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

// Clear digit screen
const clearBtn = document.querySelector('.clear-btn');
clearBtn.addEventListener('click', () => {
    calcDisplay.textContent = '';
    calcDisplayValue = [];
});

// Erase single digits
const deleteBtn = document.querySelector('.delete-btn');
deleteBtn.addEventListener('click', () => {
    calcDisplayValue.pop();
});
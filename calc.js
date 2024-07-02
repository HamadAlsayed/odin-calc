let n1, n2, op;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, op) {
    if (op == "+") {
        return add(a, b);
    }
    if (op == "-") {
        return subtract(a, b);
    }
    if (op == "*") {
        return multiply(a, b);
    }
    if (op == "/") {
        return divide(a, b);
    } else {
        return null;
    }
}

console.log(operate(1, 2, "/"));

let calcButton = document.querySelectorAll(".calc-button");
let displayValue = document.querySelector(".display");
console.log(calcButton);

calcButton.forEach((button) => {
    button.addEventListener("click", () => {
        displayValue.append(button.textContent);
        n1 = parseInt(button.textContent);
        console.log("Button pressed: " + n1);
    });
});

function display() {}

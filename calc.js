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
    switch (op) {
        case 1:
            add(a, b);
            break;
        case 2:
            subtract(a, b);
            break;
        case 3:
            multiply(a, b);
            break;
        case 4:
            divide(a, b);
            break;
    }
}

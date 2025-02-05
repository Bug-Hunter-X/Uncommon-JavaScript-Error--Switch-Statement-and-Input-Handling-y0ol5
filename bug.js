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
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

function operate(operator, a, b) {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      throw new Error('Invalid operator');
  }
}

console.log(operate('+', 5, 3)); // 8
console.log(operate('-', 5, 3)); // 2
console.log(operate('*', 5, 3)); // 15
console.log(operate('/', 5, 3)); // 1.6666666666666667
console.log(operate('/', 5, 0)); //Error: Cannot divide by zero
console.log(operate('%',5,3));//Error: Invalid operator
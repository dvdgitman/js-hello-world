// Import the built-in 'readline' module to read user input from the command line
const readline = require("readline");

// Create a readline interface to interact with the user via the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Functions to perform basic arithmetic operations
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

// Function to calculate the result based on the selected operator
function calculate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return "Invalid operator";
  }
}

// Start the interaction with the user by prompting for the first number
rl.question("Enter the first number: ", (num1) => {
  // Once the user enters the first number, prompt for the operator
  rl.question("Enter the operator (+, -, *, /): ", (operator) => {
    // Once the user enters the operator, prompt for the second number
    rl.question("Enter the second number: ", (num2) => {
      // Once the user enters the second number, calculate the result
      const result = calculate(operator, parseFloat(num1), parseFloat(num2));
      // Display the result to the console
      console.log(`Result: ${result}`);
      // Close the readline interface
      rl.close();
    });
  });
});

// Initialize variables
let currentInput = ""; // Stores the current number input by the user
let storedValue = ""; // Stores the previous number for calculations
let operation = ""; // Stores the current operator

// Function to handle number and period button clicks
function d(buttonValue) {
  if (buttonValue === "." && currentInput.includes(".")) {
    // Prevent multiple periods in a number
    return;
  }
  currentInput += buttonValue; // Append the button's value to the current input
  document.getElementById("d").value += buttonValue; // Display the updated input
}

// Function to handle operator button clicks
function c(operator) {
  if (operator === "MC") {
    // Clear everything
    currentInput = "";
    storedValue = "";
    operation = "";
    document.getElementById("d").value = ""; // Clear the display
  } else if (operator === "M+") {
    // Add current input to memory (not used in this example)
    storedValue = currentInput;
    currentInput = ""; // Clear current input
  } else {
    // Handle mathematical operations
    if (currentInput === "") return; // No input to operate on
    if (storedValue !== "") {
      // Calculate result if there was a previous value
      calculate();
    }
    operation = operator; // Set the current operation
    storedValue = currentInput; // Store the current input
    document.getElementById("d").value += " " + operator + " "; // Display the operator
    currentInput = ""; // Clear the current input for the next number
  }
}

// Function to perform the calculation
function calculate() {
  let result;
  let num1 = parseFloat(storedValue); // Convert stored value to a number
  let num2 = parseFloat(currentInput); // Convert current input to a number

  // Perform the calculation based on the operation
  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "÷":
      result = num1 / num2;
      break;
    case "x":
      result = num1 * num2;
      break;
    default:
      result = num2; // If no operation, return the current input
  }

  // Display the result and reset values
  document.getElementById("d").value = result;
  currentInput = ""; // Clear the current input
  storedValue = ""; // Clear the stored value
  operation = ""; // Clear the operation
}

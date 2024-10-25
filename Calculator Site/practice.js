let currentInput = ""; //the digit the user inputs.
let storedValue = ""; // the previous digit the user input.
let operation = ""; //the operation the current input and stored input get affected by.

function d(buttonValue) {
  // function d makes it so that a number can't have more than one period.
  if (buttonValue === "." && currentInput.includes(".")) {
    return;
  }
  currentInput += buttonValue; //adds the period (buttonValue) to the current period and displays it.
  document.getElementById("d").value += buttonValue;
}

function c(operator) {
  if (operator === "MC") {
    currentInput = "";
    storedValue = "";
    operation = "";
    document.getElementById("d").value = "";
  } else if (operator === "M+") {
    storedValue = currentInput;
    currentInput = "";
  } else {
    if (currentInput === "")
      if (storedValue !== "") {
        calculate();
      }
  }
}

function calculate() {
  let result;
  let num1 = parseFloat(storedValue);
  let num2 = parseFloat(currentInput);

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

  document.getElementById("d").value = result;
  currentInput = "";
  storedValue = "";
  operation = "";
}

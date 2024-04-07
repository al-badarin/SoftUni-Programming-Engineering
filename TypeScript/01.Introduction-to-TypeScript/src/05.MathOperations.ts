function performMathOperation(num1: number, num2: number, operator: string) {
  let result: number = 0;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;

    case "*":
      result = num1 * num2;
      break;

    case "/":
      result = num1 / num2;
      break;

    case "%":
      result = num1 % num2;
      break;

    case "**":
      result = num1 ** num2;
      break;
    default:
      console.log("Error: Invalid operator.");
      return;
  }

  console.log(`The result of ${num1} ${operator} ${num2} is: ${result}`);
}

// Test the function
performMathOperation(5, 6, '+');
performMathOperation(3, 5.5, '*');
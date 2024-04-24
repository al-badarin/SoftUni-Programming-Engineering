"use strict";
function calculator(num1, operator, num2) {
    let res = 0;
    switch (operator) {
        case "+":
            res = num1 + num2;
            break;
        case "-":
            res = num1 - num2;
            break;
        case "*":
            res = num1 * num2;
            break;
        case "/":
            res = num1 / num2;
            break;
        default:
            console.log("Invalid operator");
            return;
    }
    console.log(res.toFixed(2));
}
// Test cases
calculator(5, "+", 10); // Output: 15.00
calculator(25.5, "-", 3); // Output: 22.50
calculator(9, "/", 2); // Output: 4.50
calculator(7, "*", 5); // Output: 35.00

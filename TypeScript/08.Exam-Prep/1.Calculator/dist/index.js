"use strict";
function calculator(num1, operator, num2) {
    let res = null;
    switch (operator) {
        case "+":
            res = (num1 + num2).toFixed(2);
            break;
        case "-":
            res = (num1 - num2).toFixed(2);
            break;
        case "*":
            res = (num1 * num2).toFixed(2);
            break;
        case "/":
            res = (num1 / num2).toFixed(2);
            break;
        default:
            res = "Non existing operator!";
            break;
    }
    return res;
}
// ** Solution 2
// type DictCalc = {
//   [key: string]: string;
// };
// function calc(first: number, operator: string, second: number): string {
//   const dictCalculator = {
//     "+": (first + second).toFixed(2),
//     "-": (first - second).toFixed(2),
//     "/": (first / second).toFixed(2),
//     "*": (first * second).toFixed(2),
//   };
//   if (!dictCalculator[operator]) {
//     return "Non existing operator!";
//   }
//   return dictCalculator[operator];
// }
// Test cases
const result1 = calculator(5, "+", 10); // Output: 15.00
const result2 = calculator(25.5, "-", 3); // Output: 22.50
const result3 = calculator(9, "/", 2); // Output: 4.50
const result4 = calculator(7, "*", 5); // Output: 35.00
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);

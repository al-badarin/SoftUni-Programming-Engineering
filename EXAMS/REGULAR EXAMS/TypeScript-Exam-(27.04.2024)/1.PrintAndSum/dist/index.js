"use strict";
function printAndSum(startIndex, endIndex) {
    let sum = 0;
    let numbers = "";
    for (let i = startIndex; i <= endIndex; i++) {
        numbers += i + " ";
        sum += i;
    }
    console.log(numbers.trim());
    console.log(`Sum: ${sum}`);
}
// Test cases
printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);

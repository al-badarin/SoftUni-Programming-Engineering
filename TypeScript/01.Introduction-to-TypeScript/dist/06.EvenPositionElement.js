function findEvenPositionElements(inputArray) {
    let result = "";
    for (let i = 0; i <= inputArray.length; i += 2) {
        result += inputArray[i] + " ";
    }
    console.log(result.trim());
}
// Test the function
findEvenPositionElements(["20", "30", "40", "50", "60"]);
findEvenPositionElements(["5", "10"]);

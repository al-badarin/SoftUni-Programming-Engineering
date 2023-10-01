function biggestElement(matrix) {

    let biggestNum = Number.NEGATIVE_INFINITY;
    matrix.forEach(
        row => row.forEach(
            col => biggestNum = Math.max(biggestNum, col)));
    console.log(biggestNum);

}
console.log(biggestElement([[20, 50, 10], [8, 33, 145]]));
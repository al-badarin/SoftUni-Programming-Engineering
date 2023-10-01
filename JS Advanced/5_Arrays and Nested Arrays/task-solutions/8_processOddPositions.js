function processOddPositions(input) {

    let newArr = [];

    for (let i = 1; i < input.length; i += 2) {
        newArr.push(input[i]);
    }
    
    let resArr = newArr.map(x => x * 2).reverse();
    return resArr.join(' ');
}
console.log(processOddPositions([10, 15, 20, 25]));
console.log(processOddPositions([3, 0, 10, 4, 7, 3]));
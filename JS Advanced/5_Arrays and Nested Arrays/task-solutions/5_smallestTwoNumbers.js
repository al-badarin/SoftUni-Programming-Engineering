function smallestTwoNumbers(input) {

    input.sort((a, b) => a - b);
    let slicedNums = input.slice(0, 2);
    console.log(slicedNums.join(' '));
}
smallestTwoNumbers([30, 15, 50, 5]);
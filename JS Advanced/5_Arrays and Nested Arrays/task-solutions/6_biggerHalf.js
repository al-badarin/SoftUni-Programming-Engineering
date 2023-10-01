function biggerHalf(input) {

    let sortedArr = input.sort((a, b) => a - b);
    let slicedArr = sortedArr.slice(sortedArr.length / 2, sortedArr.length);
    return slicedArr;
}
console.log(biggerHalf([4, 7, 2, 5]));
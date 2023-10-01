function sortingNumber(arr) {

    let resultArr = [];
    arr = arr.sort((a, b) => a - b);

    while (arr.length !== 0) {
        resultArr.push(arr.shift());
        resultArr.push(arr.pop());
    }
    return resultArr;
}
sortingNumber([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
function printEveryNthElementFromArray(arr, num) {

    let resArr = [];
    for (let i = 0; i < arr.length; i += num) {
        let currNum = arr[i];
        resArr.push(currNum);
    }
    return resArr;
}
printEveryNthElementFromArray(
    [
        '5',
        '20',
        '31',
        '4',
        '20'
    ],
    2
);
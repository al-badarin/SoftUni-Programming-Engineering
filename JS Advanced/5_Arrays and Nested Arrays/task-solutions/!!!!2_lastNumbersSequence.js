function lastNumbersSequence(n, k) {

    let resArr = [];
    let sum = 0;
    for (let i = 1; i < n; i++) {
        let currentNumber = Number(i);
        sum = currentNumber;
        resArr.push(sum);
    }
    return resArr;
}
console.log(lastNumbersSequence(6, 3));
function sumOfNumbers(n, m) {

    let startingNum = Number(n);
    let endingNum = Number(m);

    let sum = 0;
    for (let i = startingNum; i <= endingNum; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumOfNumbers('1', '5'));
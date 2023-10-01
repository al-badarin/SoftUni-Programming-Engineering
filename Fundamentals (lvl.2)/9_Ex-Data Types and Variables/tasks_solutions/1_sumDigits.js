function solve(num) {

    let sum = 0;
    let numToString = String(num);

    for (let i = 0; i < numToString.length; i++) {
        let currentDigit = Number(numToString[i]);
        sum += currentDigit;
    }
    console.log(sum);
}
solve(245678);
solve(97561);
solve(543);
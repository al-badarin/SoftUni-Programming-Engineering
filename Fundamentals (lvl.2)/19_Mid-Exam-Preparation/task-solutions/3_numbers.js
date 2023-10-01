function numbers(input) {

    let arrOfNumbers = input.split(" ").map(Number);

    let sum = 0;
    for (let el of arrOfNumbers) {
        sum += el;
    }

    let avg = sum / arrOfNumbers.length;

    arrOfNumbers = arrOfNumbers
        .filter(el => el > avg)
        .sort((a, b) => b - a)
        .slice(0, 5);
    return arrOfNumbers.length > 0 ? arrOfNumbers.join(" ") : "No";
}
console.log(numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51'));
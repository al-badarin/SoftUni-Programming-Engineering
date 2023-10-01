function oddAndEvenSum(number) {

    let oddSum = 0;
    let evenSum = 0;
    let numberAsString = number.toString();

    for (let el of numberAsString) {
        let currentNumber = Number(el);

        if (currentNumber % 2 === 0) {
            evenSum += currentNumber;
        }
        else {
            oddSum += currentNumber;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435);
function sameNumbers(input) {

    let inputNumber = input.toString();
    let sum = 0;
    let isSame = true;
    let digitToCompare = inputNumber[0];

    for (let i = 0; i < inputNumber.length; i++) {
        let currentDigit = Number(inputNumber[i]);
        sum += currentDigit;

        if (currentDigit != digitToCompare) {
            isSame = false;
        }
    }
    console.log(isSame);
    console.log(sum);
}
sameNumbers(2222222);
sameNumbers(1234);
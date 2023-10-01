function palindromeIntegers(input) {

    for (let el of input) {
        let currentNumber = String(el);
        let reversedNumber = String(el).split('').reverse().join('');

        if (currentNumber === reversedNumber) {
            console.log('true');
        }
        else {
            console.log('false');
        }
    }
}
palindromeIntegers([123, 323, 421, 121]);
function negativePositiveNumbers(input) {

    let resArr = [];
    for (el of input) {
        if (el >= 0) {
            resArr.push(el);
        } else {
            resArr.unshift(el);
        }
    }
    console.log(resArr.join('\n'));
}
negativePositiveNumbers([7, -2, 8, 9]);
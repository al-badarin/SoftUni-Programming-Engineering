function solve(num1, num2, num3) {

    //solution 1
    // let sum = num1 + num2 + num3;

    // sum % 1 === 0 ? sum += ' - Integer' : sum += ' - Float';
    // console.log(sum);

    //solution 2
    // let sum = num1 + num2 + num3;
    // console.log(`${sum} - ${parseInt(sum) === sum ? 'Integer' : 'Float'}`);

    //solution 3
    let sum = num1 + num2 + num3;
    let sumToString = String(sum);
    let isFloat = false;

    for (i = 0; i < sumToString.length; i++) {
        let currentNum = sumToString[i];
        if (currentNum === ".") {
            isFloat = true;
            break;
        }
    }
    console.log(`${sum} - ${isFloat ? 'Float' : 'Integer'}`);
}
solve(9, 100, 1.1);
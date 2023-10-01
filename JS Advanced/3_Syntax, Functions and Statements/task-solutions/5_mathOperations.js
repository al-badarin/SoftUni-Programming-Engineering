function mathOperations(num1, num2, string) {

    let result;
    switch (string) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        case '**':
            result = Math.pow(num1, num2)
            break;
    }
    console.log(result);

}
mathOperations(5, 6, '+');
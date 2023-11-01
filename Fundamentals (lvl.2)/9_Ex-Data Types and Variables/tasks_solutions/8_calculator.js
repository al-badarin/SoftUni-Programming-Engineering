function solve(num1, operator, num2) {

    let result = 0;
    switch (operator) {
        case '+': result = num1 + num2;
            break;
        case '-': result = num1 - num2;
            break;
        case '*': result = num1 * num2;
            break;
        case '/': result = num1 / num2;
            break;
        default: result = 'Invalid operation!';
            console.log(result);
            return;
    }
    console.log(result.toFixed(2));

}
solve(5, '+', 10);
solve(25.5, '-', 3);
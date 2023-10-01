function factorialDivision(num1, num2) {

    let res1 = 1;
    let res2 = 1;

    for (let i = 1; i <= num1; i++) {
        res1 *= i;
    }

    for (let j = 1; j <= num2; j++) {
        res2 *= j;
    }

    let finalResult = res1 / res2;

    console.log(finalResult.toFixed(2));
}
factorialDivision(5, 2);
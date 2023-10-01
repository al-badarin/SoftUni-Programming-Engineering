function solve(input){

    let yearlyTax = Number(input[0]);
    let shoes = yearlyTax * 0.60;
    let outfit = shoes * 0.80;
    let ball = (1/4) * outfit;
    let accessories = (1/5) * ball;

    let result = yearlyTax + shoes + outfit + ball + accessories;
    console.log(result);
}

solve(["365"])
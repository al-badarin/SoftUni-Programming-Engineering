function solve(input){

    let rent = Number(input[0]);

    let cake = rent * 0.20;
    let drinks = cake - cake * 0.45;
    let animator = 1/3 * rent;

    totalSum = rent + cake + drinks + animator;

    console.log(totalSum);
}
solve(["2250"])
function solve(n){

    let sum = 0;

    for (let i = 1; i <= n; i++){
        let currentNum = i;
        sum += currentNum % 10;
    }
    if (sum === 5 || sum === 7 || sum === 11){
        console.log(true);
    }
    
}
solve(15);

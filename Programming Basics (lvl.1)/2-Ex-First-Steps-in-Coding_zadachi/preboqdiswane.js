function solve(input){

    let naylon = Number(input[0]);
    let paint = Number(input[1]);
    let razreditel = Number(input[2]);
    let workTime = Number(input[3]);

    let sumNaylon = (naylon + 2) * 1.50;
    let sumPaint = (paint + (paint * 0.1)) * 14.50;
    let sumRazrediteli = razreditel * 5.00;
    let totalSum = sumNaylon + sumPaint + sumRazrediteli + 0.40;
    let sumWorkTime = (totalSum * 0.3) * workTime;

    let result = sumWorkTime + totalSum;

    console.log(result);
}

solve(["10", "11", "4","8"])
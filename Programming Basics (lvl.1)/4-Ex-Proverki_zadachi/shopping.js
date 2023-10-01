function solve(input){

    let budget = Number(input[0]);
    let videoCards = Number(input[1]);
    let processors = Number(input[2]);
    let ram = Number(input[3]);

    let sumVideoCards = videoCards * 250;
    let sumProcessors = processors * (sumVideoCards * 0.35);
    let sumRam = ram * (sumVideoCards * 0.1);

    let totalSum = sumVideoCards + sumProcessors + sumRam;
    
    if (videoCards > processors){
        totalSum = totalSum - (totalSum * 0.15)
    }
    if (budget >= totalSum){
        console.log(`You have ${(budget-totalSum).toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${(totalSum-budget).toFixed(2)} leva more!`)
    }
    
}
solve(["920.45",
"3",
"1",
"1"])


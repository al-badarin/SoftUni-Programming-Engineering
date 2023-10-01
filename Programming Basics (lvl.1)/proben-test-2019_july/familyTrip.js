function solve(input){

    let budget = Number(input[0]);
    let numNights = Number(input[1]);
    let pricePerNight = Number(input[2]);
    let percentExtraTaxes = Number(input[3]);

    if (numNights > 7){
        pricePerNight = pricePerNight * 0.95;
    }

    let totalSumNights = pricePerNight * numNights;
    let totalSumExtraFees = budget * percentExtraTaxes;

    let finalSum = totalSumNights + totalSumExtraFees / 100;

    if (budget >= finalSum){
        console.log(`Ivanovi will be left with ${(budget - finalSum).toFixed(2)} leva after vacation.`);
    }
    else{console.log(`${(finalSum - budget).toFixed(2)} leva needed.`);
}
    
}
solve(["500",
"7",
"66",
"15"])


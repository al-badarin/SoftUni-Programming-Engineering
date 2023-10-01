function solve(input){

    let priceRocket = Number(input[0]);
    let numberRockets = Number(input[1]);
    let numberPairShoes = Number(input[2]);

    let sumRockets = numberRockets * priceRocket;
    let pricePairShoes = priceRocket / 6;
    let sumPairShoes = numberPairShoes * pricePairShoes;
    let sumOtherEquipment = (sumPairShoes + sumRockets) * 0.2;

    let totalSum = sumPairShoes + sumRockets + sumOtherEquipment;
    
    console.log(`Price to be paid by Djokovic ${Math.floor(totalSum / 8)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(totalSum * 7/8)}`);

}
solve(["386",
"7",
"4"])

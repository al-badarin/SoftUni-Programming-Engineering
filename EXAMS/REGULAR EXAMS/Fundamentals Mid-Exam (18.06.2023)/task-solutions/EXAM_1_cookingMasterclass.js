function cookingMasterclass(input) {

    let budget = Number(input[0]);
    let students = Number(input[1]);
    let priceOnePackFlour = Number(input[2]);
    let priceOneEgg = Number(input[3]);
    let priceOneApron = Number(input[4]);

    let totalPriceEggs = students * 10 * priceOneEgg;

    let numberAprons = students + Math.ceil(students * 0.20);
    let totalPriceAprons = numberAprons * priceOneApron;

    let totalPriceFlour = students * priceOnePackFlour;

    for (i = 1; i <= students; i++) {
        if (i % 5 === 0) {
            totalPriceFlour -= priceOnePackFlour;
        }
    }

    let totalPriceAll = totalPriceFlour + Math.ceil(totalPriceAprons) + totalPriceEggs;

    if (totalPriceAll <= budget) {
        console.log(`Items purchased for ${totalPriceAll.toFixed(2)}$.`);
    } else {
        let neededMoney = totalPriceAll - budget;
        console.log(`${neededMoney.toFixed(2)}$ more needed.`);
    }
}
cookingMasterclass([50,
    2,
    1.0,
    0.10,
    10.0]);

console.log("--------------------");

cookingMasterclass([100,
    25,
    4.0,
    1.0,
    6.0]);

console.log("--------------------");

cookingMasterclass([40,
    2,
    1.0,
    0.10,
    10.0]);
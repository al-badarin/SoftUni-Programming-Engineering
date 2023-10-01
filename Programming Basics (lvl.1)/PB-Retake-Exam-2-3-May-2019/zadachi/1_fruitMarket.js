function solve(input) {

    let priceStrawberries = Number(input[0]);
    let kgBananas = Number(input[1]);
    let kgOranges = Number(input[2]);
    let kgRasberries = Number(input[3]);
    let kgStrawberries = Number(input[4]);

    let priceRasberries = priceStrawberries * 0.5;
    let priceOranges = priceRasberries - (priceRasberries * 0.4);
    let priceBananas = priceRasberries - (priceRasberries * 0.8);

    let sumRasberries = priceRasberries * kgRasberries;
    let sumOranges = priceOranges * kgOranges;
    let sumBananas = priceBananas * kgBananas;
    let sumStrawberries = priceStrawberries * kgStrawberries;

    let totalSum = sumStrawberries + sumBananas + sumOranges + sumRasberries;

    console.log(totalSum.toFixed(2));
}
solve([48,
    10,
    3.3,
    6.5,
    1.7 
])
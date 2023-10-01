function solve(input) {

    let numberCats = Number(input[0]);

    let gr1 = 0;
    let gr2 = 0;
    let gr3 = 0;

    let currentAmountFood = 0;
    let totalAmountFood = 0;

    for (let i = 1; i <= numberCats; i++) {
        currentAmountFood = Number(input[i]);

        if (currentAmountFood >= 100 && currentAmountFood < 200) {
            gr1++;
            totalAmountFood += currentAmountFood;
        }
        else if (currentAmountFood >= 200 && currentAmountFood < 300) {
            gr2++;
            totalAmountFood += currentAmountFood;
        }
        else if (currentAmountFood >= 300 && currentAmountFood < 400) {
            gr3++;
            totalAmountFood += currentAmountFood;
        }
    }
    let kgFood = totalAmountFood / 1000;
    let priceFood = kgFood * 12.45;

    console.log(`Group 1: ${gr1} cats.`);
    console.log(`Group 2: ${gr2} cats.`);
    console.log(`Group 3: ${gr3} cats.`);
    console.log(`Price for food per day: ${priceFood.toFixed(2)} lv.`);
}
solve(["6",
    "102",
    "236",
    "123",
    "399",
    "342",
    "222"])

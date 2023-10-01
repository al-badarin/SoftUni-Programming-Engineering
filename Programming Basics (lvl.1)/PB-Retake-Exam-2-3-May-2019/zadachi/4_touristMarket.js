function solve(input) {

    let budget = Number(input[0]);
    let index = 1;
    let command = input[index];

    let totalSum = 0;
    let productCounter = 0;

    while (command !== "Stop") {
        let currentProduct = command;
        productCounter++;
        index++;

        let priceCurrentProduct = Number(input[index]);
        if (productCounter % 3 === 0) {
            priceCurrentProduct = priceCurrentProduct * 0.5;
        }
        totalSum += priceCurrentProduct;

        index++;
        command = input[index];

        if (budget < totalSum) {
            console.log("You don't have enough money!");
            console.log(`You need ${(totalSum - budget).toFixed(2)} leva!`);
            break;
        }
    }
    if (command === "Stop") {
        console.log(`You bought ${productCounter} products for ${totalSum.toFixed(2)} leva.`);
    }
}
solve(["54",
"Thermal underwear",
"24",
"Sunscreen",
"45"])


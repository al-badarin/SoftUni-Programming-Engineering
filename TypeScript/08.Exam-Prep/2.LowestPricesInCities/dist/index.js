"use strict";
function lowestPrices(input) {
    const products = {};
    // Parse input
    input.forEach((entry) => {
        const [town, product, priceStr] = entry.split(" | ");
        const price = Number(priceStr);
        if (!products[product] || price < products[product].price) {
            products[product] = { price: price, town };
        }
    });
    // Output lowest prices
    for (const product in products) {
        console.log(`${product} -> ${products[product].price} (${products[product].town})`);
    }
}
// Test case
const input = [
    "Sample Town | Sample Product | 1000",
    "Sample Town | Orange | 2",
    "Sample Town | Peach | 1",
    "Sofia | Orange | 3",
    "Sofia | Peach | 2",
    "New York | Sample Product | 1000.1",
    "New York | Burger | 10",
];
lowestPrices(input);

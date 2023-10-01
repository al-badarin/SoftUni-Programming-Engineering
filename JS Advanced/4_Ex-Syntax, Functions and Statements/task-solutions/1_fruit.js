function solve(fruit, grams, priceKg) {

    let convertedWeight = grams / 1000;
    let sum = convertedWeight * priceKg;

    console.log(`I need $${sum.toFixed(2)} to buy ${convertedWeight.toFixed(2)} kilograms ${fruit}.`);
}
solve('orange', 2500, 1.80);
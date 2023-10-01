function solve(input) {

    let budget = Number(input[0]);
    let fuel = Number(input[1]);
    let day = input[2];

    let priceFuel = fuel * 2.10;
    let totalPrice = priceFuel + 100;

    if (day === "Saturday") {
        totalPrice = totalPrice * 0.90;
    }
    else if (day === "Sunday") {
        totalPrice = totalPrice * 0.80;
    }

    if (budget >= totalPrice) {
        console.log(`Safari time! Money left: ${(budget - totalPrice).toFixed(2)} lv. `);
    }
    else if (budget < totalPrice) {
        console.log(`Not enough money! Money needed: ${(totalPrice - budget).toFixed(2)} lv.`);
    }
}
solve(["1000",
    "10",
    "Sunday"])

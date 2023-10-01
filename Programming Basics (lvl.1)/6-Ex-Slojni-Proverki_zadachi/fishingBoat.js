function solve(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let numberFishers = Number(input[2]);
    let rentPrice = 0;

    switch (season) {
        case "Spring":
            rentPrice = 3000;
            if (numberFishers % 2 === 0) {
                rentPrice = rentPrice * 0.95
            }
            break;

        case "Summer": rentPrice = 4200;
            if (numberFishers % 2 === 0) {
                rentPrice = rentPrice * 0.95
            }
            break;

        case "Autumn": rentPrice = 4200; break;

        case "Winter": rentPrice = 2600;
            if (numberFishers % 2 === 0) {
                rentPrice = rentPrice * 0.95
            }
            break;
    }

    if (numberFishers <= 6) {
        rentPrice = rentPrice * 0.9;
    }
    else if (numberFishers >= 7 && numberFishers <= 11) {
        rentPrice = rentPrice * 0.85;
    }
    else if (numberFishers > 12) {
        rentPrice = rentPrice * 0.75;
    }

    if (budget >= rentPrice) {
        console.log(`Yes! You have ${(budget - rentPrice).toFixed(2)} leva left.`)
    }
    else { console.log(`Not enough money! You need ${(rentPrice - budget).toFixed(2)} leva.`) }

}
solve(["3000",
    "Summer",
    "11"])


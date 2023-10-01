function solve(input) {

    let numberDancers = Number(input[0]);
    let points = Number(input[1]);
    let season = input[2];
    let place = input[3];

    let sum = 0;

    if (place === "Bulgaria") {
        sum = points * numberDancers;

        switch (season) {
            case "summer": sum = sum - (sum * 0.05);
                break;
            case "winter": sum = sum - (sum * 0.08);
                break;
        }
    }

    else if (place === "Abroad") {
        sum = points * numberDancers;
        sum *= 1.5;

        switch (season) {
            case "summer": sum = sum - (sum * 0.10);
                break;
            case "winter": sum = sum - (sum * 0.15);
                break;
        }
    }

    let sumCharity = sum * 0.75;
    let sumAfterCharity = sum - (sum * 0.75);
    let sumPerDancer = sumAfterCharity / numberDancers;

    console.log(`Charity - ${sumCharity.toFixed(2)}`);
    console.log(`Money per dancer - ${sumPerDancer.toFixed(2)}`);
}
solve(["25",
"98",
"winter",
"Bulgaria"])


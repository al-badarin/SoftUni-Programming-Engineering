function solve(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let destination;
    let accomodation;

    if (budget <= 100) {
        destination = "Bulgaria"
        if (season === "summer") {
            accomodation = "Camp";
            budget = budget * 0.3;
        }
        else if (season === "winter") {
            accomodation = "Hotel";
            budget = budget * 0.7;
        }
    }

    else if (budget <= 1000) {
        destination = "Balkans"
        if (season === "summer") {
            accomodation = "Camp";
            budget = budget * 0.4;
        }
        else if (season === "winter") {
            accomodation = "Hotel";
            budget = budget * 0.8;
        }
    }

    else if (budget > 1000) {
        destination = "Europe"
        accomodation = "Hotel";
        budget = budget * 0.9;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${accomodation} - ${budget.toFixed(2)}`)
}
solve(["678.53", "winter"])
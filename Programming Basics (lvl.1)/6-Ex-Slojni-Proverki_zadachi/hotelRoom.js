function solve(input) {

    let month = input[0];
    let numberNihts = Number(input[1]);
    let priceStudio = 0;
    let priceAppartment = 0;


    if (month === "May" || month === "October") {
        priceStudio = 50;
        priceAppartment = 65;

        if (numberNihts > 14) {
            priceStudio = priceStudio * 0.70;
            priceAppartment = priceAppartment * 0.90;
        }
        else if (numberNihts > 7) {
            priceStudio = priceStudio * 0.95;
        }
    }
    else if (month === "June" || month === "September") {
        priceStudio = 75.20;
        priceAppartment = 68.70;
        if (numberNihts > 14) {
            priceStudio = priceStudio * 0.80;
            priceAppartment = priceAppartment * 0.90;
        }
    }
    else if (month === "July" || month === "August") {
        priceStudio = 76;
        priceAppartment = 77;
        if (numberNihts > 14) {
            priceAppartment = priceAppartment * 0.90;
        }
    }
    console.log(`Apartment: ${(priceAppartment * numberNihts).toFixed(2)} lv.`);
    console.log(`Studio: ${(priceStudio * numberNihts).toFixed(2)} lv.`);
}
solve(["May",
    "15"])

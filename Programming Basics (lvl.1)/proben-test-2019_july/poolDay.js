function solve(input) {

    let numPeople = Number(input[0]);
    let taxEntrance = Number(input[1]);
    let priceShezlong = Number(input[2]);
    let priceChadyr = Number(input[3]);

    let totalPriceTaxEntrance = taxEntrance * numPeople;
    let totalPriceShezlongi = Math.ceil(numPeople * 0.75) * priceShezlong;
    let totalPriceChadyri = Math.ceil(numPeople * 0.5) * priceChadyr;

    let finalSum = totalPriceTaxEntrance + totalPriceShezlongi + totalPriceChadyri;
    console.log(`${finalSum.toFixed(2)} lv.`);
}
solve(["21",
    "5.50",
    "4.40",
    "6.20"])

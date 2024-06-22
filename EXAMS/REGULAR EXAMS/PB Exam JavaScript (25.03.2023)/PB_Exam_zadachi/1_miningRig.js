function solve(input) {

    let priceVideoCard = Number(input[0]);
    let pricePrehodnik = Number(input[1]);
    let consumedElectricity = Number(input[2]);
    let profitFromCardPerDay = Number(input[3]);

    let sumVideoCard = 13 * priceVideoCard;
    let sumPrehodnik = 13 * pricePrehodnik;

    let totalSpent = sumVideoCard + sumPrehodnik + 1000;

    let sumProfitFromCardPerDay = profitFromCardPerDay - consumedElectricity;
    let totalProfit = 13 * sumProfitFromCardPerDay;

    let moneyBack = totalSpent / totalProfit;

    console.log(totalSpent);
    console.log(Math.ceil(moneyBack));
}
solve(["800",
    "10",
    "0.32",
    "6.4"])

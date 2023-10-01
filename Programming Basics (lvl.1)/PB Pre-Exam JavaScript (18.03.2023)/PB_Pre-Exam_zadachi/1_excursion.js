function solve(input) {

    let numberPeople = Number(input[0]);
    let numberNights = Number(input[1]);
    let numberCards = Number(input[2]);
    let numberTickets = Number(input[3]);

    let sumNights = numberNights * 20;
    let sumCards = numberCards * 1.60;
    let sumTickets = numberTickets * 6;

    let totalSumOnePerson = sumNights + sumCards + sumTickets;
    let totalSumGroup = totalSumOnePerson * numberPeople;

    let finalSum = totalSumGroup * 1.25;

    console.log(finalSum.toFixed(2));
}
solve(["20",//numberPeople
    "14",//numberNights
    "30",//numberCards
    "6"])//numberTickets

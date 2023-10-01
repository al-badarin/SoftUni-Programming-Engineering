function solve(input) {

    let priceHoliday = Number(input[0]);
    let puzzles = Number(input[1]);
    let kukli = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let kamioni = Number(input[5]);
    let discount = 0.0;

    let sum = puzzles * 2.60 + kukli * 3 + bears * 4.10 + minions * 8.20 + kamioni * 2;
    let numberToys = puzzles + kukli + bears + minions + kamioni;

    if (numberToys >= 50) {
        sum = 0.75 * sum;
    }

    let pariSledNaem = 0.90 * sum

    if (pariSledNaem >= priceHoliday) {
        console.log(`Yes! ${(pariSledNaem - priceHoliday).toFixed(2)} lv left.`);
    } else { console.log(`Not enough money! ${(priceHoliday - pariSledNaem).toFixed(2)} lv needed.`) }
}
solve(["320",
"8",
"2",
"5",
"5",
"1"])


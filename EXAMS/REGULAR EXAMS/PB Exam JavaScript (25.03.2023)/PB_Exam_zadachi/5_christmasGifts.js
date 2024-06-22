function solve(input) {

    let index = 0;
    let command = input[index];

    let adultsCount = 0;
    let kidsCount = 0;
    let toysCount = 0;
    let sweatersCount = 0;

    while (command !== "Christmas") {
        let currentAge = Number(command);
        if (currentAge <= 16) {
            kidsCount++;
            toysCount++;
        }
        else if (currentAge > 16) {
            adultsCount++;
            sweatersCount++;
        }
        index++;
        command = input[index];
    }

    let moneyToys = toysCount * 5;
    let moneySweater = sweatersCount * 15;

    console.log(`Number of adults: ${adultsCount}`);
    console.log(`Number of kids: ${kidsCount}`);
    console.log(`Money for toys: ${moneyToys}`);
    console.log(`Money for sweaters: ${moneySweater}`);

}
solve(["16",
    "20",
    "46",
    "12",
    "8",
    "20",
    "49",
    "Christmas"])

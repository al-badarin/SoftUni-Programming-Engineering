function solve(input) {

    let neededMoney = Number(input[0]);
    let availableMoney = Number(input[1]);
    let index = 2;
    let command = input[index];

    let totalDays = 0;
    let spentDays = 0;

    while (availableMoney < neededMoney) {
        totalDays++;
        index++;

        if (command === "spend") {
            spentDays++;

            if (spentDays === 5) {
                console.log("You can't save the money.");
                console.log(totalDays);
                break;
            }
            let moneyToSpend = Number(input[index]);
            availableMoney -= moneyToSpend

            if (availableMoney < 0) {
                availableMoney = 0;
            }
        }

        else if (command === "save") {
            spentDays = 0;
            let moneyToSave = Number(input[index]);
            availableMoney += moneyToSave
        }
        index++;
        command = input[index];
    }
    if (availableMoney >= neededMoney){
        console.log(`You saved the money for ${totalDays} days.`);
    }
}
solve(["2000",
    "1000",
    "spend",
    "1200",
    "save",
    "2000"])

function counterStrike(input) {

    let initialEnergy = Number(input[0]);

    let battleWonCounter = 0;

    let index = 1;
    let command = input[index];
    index++;

    while (command !== "End of battle") {
        let distance = Number(command);
        initialEnergy -= distance;

        if (initialEnergy >= 0) {
            battleWonCounter++;

            if (battleWonCounter % 3 === 0) {
                initialEnergy += battleWonCounter;
            }
        } else {
            initialEnergy = 0
            console.log(`Not enough energy! Game ends with ${battleWonCounter} won battles and ${initialEnergy} energy`);
            break;
        }
        command = input[index];
        index++;
    }

    if (command === "End of battle") {
        console.log(`Won battles: ${battleWonCounter}. Energy left: ${initialEnergy}`);
    }
}
counterStrike(["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"]);

console.log("-------------------");

counterStrike(["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"]);

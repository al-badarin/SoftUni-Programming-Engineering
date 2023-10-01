function solve(input) {

    let tournaments = Number(input[0]);
    let startingPoints = Number(input[1]);
    let index = 2;

    let receivedPts = 0;
    let wins = 0;

    for (let i = 0; i < tournaments; i++) {

        let stage = input[index];
        index++;
        switch (stage) {
            case "W":
                wins++;
                startingPoints += 2000;
                receivedPts += 2000;
                break;
            case "F":
                startingPoints += 1200;
                receivedPts += 1200;
                break;
            case "SF":
                startingPoints += 720;
                receivedPts += 720
                break;
        }
    }

    let avgPts = receivedPts / tournaments;
    let winPercentage = wins / tournaments * 100;
    console.log(`Final points: ${startingPoints}`);
    console.log(`Average points: ${Math.floor(avgPts)}`);
    console.log(`${winPercentage.toFixed(2)}%`);

}
solve(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"])

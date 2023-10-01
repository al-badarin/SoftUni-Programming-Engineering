function solve(input) {

    let namePlayer1 = input[0];
    let namePlayer2 = input[1];

    let totalPointsPlayer1 = 0;
    let totalPointsPlayer2 = 0;

    let index = 2;
    let command = input[index];


    while (command !== "End of game") {
        let pointsPlayer1 = Number(command);
        index++;

        command = input[index];
        let pointsPlayer2 = Number(command)

        if (pointsPlayer1 > pointsPlayer2) {
            totalPointsPlayer1 += pointsPlayer1 - pointsPlayer2;
        }
        else if (pointsPlayer2 > pointsPlayer1) {
            totalPointsPlayer2 += pointsPlayer2 - pointsPlayer1;
        }
        else if (pointsPlayer1 === pointsPlayer2) {
            console.log("Number wars!");
            index++;

            command = input[index];
            let lastCardPlayer1 = Number(command);
            index++;

            command = input[index];
            let lastCardPlayer2 = Number(command);

            if (lastCardPlayer1 > lastCardPlayer2) {
                console.log(`${namePlayer1} is winner with ${totalPointsPlayer1} points`);
                break;
            }
            else if (lastCardPlayer2 < lastCardPlayer1) {
                console.log(`${namePlayer2} is winner with ${totalPointsPlayer2} points`);
                break;
            }
        }

        index++;
        command = input[index];

        if (command === "End of game") {
            console.log(`${namePlayer1} has ${totalPointsPlayer1} points`);
            console.log(`${namePlayer2} has ${totalPointsPlayer2} points`);
        }
    }

}
solve(["Elena",
"Simeon",
"6",
"3",
"2",
"5",
"8",
"9",
"End of game"])




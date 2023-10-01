function solve(input) {

    let index = 0;
    let nameTournament = input[index];
    index++;

    let win = 0;
    let lost = 0;
    let totalGamesCounter = 0;
    let allGames = 0;


    while (nameTournament !== "End of tournaments") {
        let numberGames = Number(input[index]);
        
        index++;

        for (let i = 0; i < numberGames; i++) {
            totalGamesCounter++;
            let pointsDesi = Number(input[index]);
            index++;

            let pointsOthers = Number(input[index]);
            index++;

            if (pointsDesi > pointsOthers) {
                win++;
                console.log(`Game ${totalGamesCounter} of tournament ${nameTournament}: win with ${pointsDesi - pointsOthers} points.`);
            }
            else if (pointsOthers > pointsDesi) {
                lost++;
                console.log(`Game ${totalGamesCounter} of tournament ${nameTournament}: lost with ${pointsOthers - pointsDesi} points.`);
            }
            
        }
        allGames += totalGamesCounter;
        nameTournament = input[index];
        index++;
        totalGamesCounter = 0


    }

    let percentWin = win / allGames * 100;
    let percentLost = lost / allGames * 100;

    console.log(`${percentWin.toFixed(2)}% matches win`);
    console.log(`${percentLost.toFixed(2)}% matches lost`);


}
solve(["Dunkers", //nameTournament
    "2",//numberGames
    "75",//pointsDesi
    "65",//pointsOthers
    "56",//pointsDesi
    "73",//pointsOthers
    "Fire Girls",
    "3",
    "67",
    "34",
    "83",
    "98",
    "66",
    "45",
    "End of tournaments"])

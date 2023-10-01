function solve(input){
    
    let res1 = input[0];
    let res2 = input[1];
    let res3 = input[2];

    let wins = 0;
    let losses = 0;
    let draws = 0;


    let goalsHome1 = res1.charAt(0);
    let goalsAway1 = res1.charAt(2);
    if (goalsHome1 > goalsAway1){
        wins++;
    }
    else if(goalsHome1 < goalsAway1){
        losses++;
    }
    else if(goalsHome1 === goalsAway1){
        draws++;
    }


    let goalsHome2 = res2.charAt(0);
    let goalsAway2 = res2.charAt(2);
    if (goalsHome2 > goalsAway2){
        wins++;
    }
    else if(goalsHome2 < goalsAway2){
        losses++;
    }
    else if(goalsHome2 === goalsAway2){
        draws++;
    }


    let goalsHome3 = res3.charAt(0);
    let goalsAway3 = res3.charAt(2);
    if (goalsHome3 > goalsAway3){
        wins++;
    }
    else if(goalsHome3 < goalsAway3){
        losses++;
    }
    else if(goalsHome3 === goalsAway3){
        draws++;
    }

    console.log(`Team won ${wins} games.`);
    console.log(`Team lost ${losses} games.`);
    console.log(`Drawn games: ${draws}`);
}
solve(["3:1",
"0:2",
"0:0"])

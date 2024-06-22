function solve(input){

    let minutesWalking = Number(input[0]);
    let numberWalks = Number(input[1]);
    let caloriesPerDay = Number(input[2]);

    let totalMinutesWalking = minutesWalking * numberWalks;
    let burnedCalories = totalMinutesWalking * 5;

    if (burnedCalories >= caloriesPerDay * 0.5){
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${burnedCalories}.`);
    }
    else{
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burnedCalories}.`);
    }
}
solve(["30",
"3",
"600"])

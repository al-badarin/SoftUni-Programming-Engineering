function solve(input) {

    let budget = Number(input[0]);
    let sex = input[1];
    let age = Number(input[2]);
    let sportType = input[3];

    let totalSum = 0;

    if (sex === "m") {
        switch (sportType) {
            case "Gym": totalSum += 42;
                break;

            case "Boxing": totalSum += 41;
                break;

            case "Yoga": totalSum += 45;
                break;

            case "Zumba": totalSum += 34;
                break;

            case "Dances": totalSum += 51;
                break;

            case "Pilates": totalSum += 39;
                break;
        }
    }

    else if (sex === "f") {
        switch (sportType) {
            case "Gym": totalSum += 35;
                break;

            case "Boxing": totalSum += 37;
                break;

            case "Yoga": totalSum += 42;
                break;

            case "Zumba": totalSum += 31;
                break;

            case "Dances": totalSum += 53;
                break;

            case "Pilates": totalSum += 37;
                break;
        }
    }

    if (age <= 19) {
        totalSum = totalSum * 0.80;
    }

    if (budget >= totalSum){
        console.log(`You purchased a 1 month pass for ${sportType}.`);
    }
    else {
        console.log(`You don't have enough money! You need $${(totalSum - budget).toFixed(2)} more.`);
    }
    
}
solve(["50",
    "m",
    "23",
    "Gym"])

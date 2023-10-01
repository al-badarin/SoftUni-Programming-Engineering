function solve(input) {

    let flowerType = input["0"];
    let flowerNumber = Number(input["1"]);
    let budget = Number(input["2"]);
    let totalSum = 0;

    switch (flowerType) {
        case "Roses": 
        totalSum = flowerNumber * 5;
        if (flowerNumber > 80){
            totalSum = totalSum * 0.9
        };break;

        case "Dahlias":
            totalSum = flowerNumber * 3.80;
            if (flowerNumber > 90){
                totalSum = totalSum * 0.85
            };break;

        case "Tulips":
            totalSum = flowerNumber * 2.80;
            if (flowerNumber > 80){
                totalSum = totalSum * 0.85
            };break;

        case "Narcissus":
            totalSum = flowerNumber * 3;
            if (flowerNumber < 120){
                totalSum = totalSum * 1.15
            };break;

        case "Gladiolus":
            totalSum = flowerNumber * 2.50;
            if (flowerNumber < 80){
                totalSum = totalSum * 1.20
            };break;
    }
    if (budget >= totalSum) {
        console.log(`Hey, you have a great garden with ${flowerNumber} ${flowerType} and ${(budget - totalSum).toFixed(2)} leva left.`);
    }
    else { console.log(`Not enough money, you need ${(totalSum - budget).toFixed(2)} leva more.`); }
}

solve(["Gladiolus",
"64",
"160"])

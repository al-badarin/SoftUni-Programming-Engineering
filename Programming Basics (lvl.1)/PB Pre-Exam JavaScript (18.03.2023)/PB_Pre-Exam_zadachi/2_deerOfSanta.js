function solve(input) {

    let daysMissing = Number(input[0]);
    let kilosFood = Number(input[1]);
    let foodDeer1 = Number(input[2]);
    let foodDeer2 = Number(input[3]);
    let foodDeer3 = Number(input[4]);

    let sumFoodDeer1 = daysMissing * foodDeer1;
    let sumFoodDeer2 = daysMissing * foodDeer2;
    let sumFoodDeer3 = daysMissing * foodDeer3;

    let totalConsumedFood = sumFoodDeer1 + sumFoodDeer2 + sumFoodDeer3;

    if (kilosFood > totalConsumedFood){
        console.log(`${Math.floor(kilosFood - totalConsumedFood)} kilos of food left.`);
    }
    else if (totalConsumedFood > kilosFood){
        console.log(`${Math.ceil(totalConsumedFood - kilosFood)} more kilos of food are needed.`);
    }
}
solve(["2",//daysMissing
    "10",//kilosFood
    "1",//foodDeer1
    "1",//foodDeer2
    "2"])//foodDeer3

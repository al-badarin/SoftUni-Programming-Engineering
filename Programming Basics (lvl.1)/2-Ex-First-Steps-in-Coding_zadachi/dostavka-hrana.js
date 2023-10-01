function solve(input){

    let chicken = Number(input[0]);
    let fish = Number(input[1]);
    let vegan = Number(input[2]);

    let sumChicken = chicken * 10.35;
    let sumFish = fish * 12.40;
    let sumVegan = vegan * 8.15;
    let totalSum = sumChicken + sumFish + sumVegan;
    let desert = totalSum * 0.2;
    let delivery = 2.50;

    let result = totalSum + desert + delivery;
    console.log(result);
}

solve(["2", "4", "3"])
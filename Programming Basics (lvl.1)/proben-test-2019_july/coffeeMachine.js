function solve(input) {

    let drinkType = input[0];
    let sugarType = input[1];
    let numberDrinks = input[2];

    let price = 0;

    if (sugarType === "Without"){
        switch (drinkType) {
            case "Espresso": price = (numberDrinks * 0.90) * 0.65;
                if (numberDrinks >= 5){
                    price = price * 0.75;
                }
                break;
            case "Cappuccino": price = (numberDrinks * 1.00) * 0.65;
                break;
            case "Tea": price = (numberDrinks * 0.50) * 0.65;
        }
    }

    else if (sugarType === "Normal"){
        switch (drinkType) {
            case "Espresso": price = numberDrinks * 1.00;
                if (numberDrinks >= 5){
                    price = price * 0.75;
                }
                break;
            case "Cappuccino": price = numberDrinks * 1.20;
                break;
            case "Tea": price = numberDrinks * 0.60;
        }
    }
    
    else if (sugarType === "Extra"){
        switch (drinkType) {
            case "Espresso": price = numberDrinks * 1.20;
                if (numberDrinks >= 5){
                    price = price * 0.75;
                }
                break;
            case "Cappuccino": price = numberDrinks * 1.60;
                break;
            case "Tea": price = numberDrinks * 0.70;
        }
    }

    if (price > 15){
        price = price * 0.80;
    }

    console.log(`You bought ${numberDrinks} cups of ${drinkType} for ${price.toFixed(2)} lv.`);
    
}
solve(["Espresso", "Without", "10"])

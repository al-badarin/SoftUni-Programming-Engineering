function solve(input){

    let degrees = Number(input["0"]);
    let partOfTheDay = input["1"];
    let outfit;
    let shoes;

    if (degrees >= 10 && degrees <= 18){
        if(partOfTheDay === "Morning"){
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        }
        if(partOfTheDay === "Afternoon"){
            outfit = "Shirt";
            shoes = "Moccasins";
        }
        if(partOfTheDay === "Evening"){
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }

    else if (degrees > 18 && degrees <= 24){
        if(partOfTheDay === "Morning"){
            outfit = "Shirt";
            shoes = "Moccasins";
        }
        if(partOfTheDay === "Afternoon"){
            outfit = "T-Shirt";
            shoes = "Sandals";
        }
        if(partOfTheDay === "Evening"){
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }

    else if (degrees >= 25){
        if(partOfTheDay === "Morning"){
            outfit = "T-Shirt";
            shoes = "Sandals";
        }
        if(partOfTheDay === "Afternoon"){
            outfit = "Swim Suit";
            shoes = "Barefoot";
        }
        if(partOfTheDay === "Evening"){
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
}
solve(["16",
"Morning"])

function solve(input) {

    let typeCat = input[0];
    let sexCat = input[1];

    let yearsLiving = 0;

    if (sexCat === "m") {
        switch (typeCat) {
            case "British Shorthair": yearsLiving = 13;
                break;
            case "Siamese": yearsLiving = 15;
                break;
            case "Persian": yearsLiving = 14;
                break;
            case "Ragdoll": yearsLiving = 16;
                break;
            case "American Shorthair": yearsLiving = 12;
                break;
            case "Siberian": yearsLiving = 11;
                break;

            default: console.log(`${typeCat} is invalid cat!`);
                break;
        }
    }

    else if (sexCat === "f") {
        switch (typeCat) {
            case "British Shorthair": yearsLiving = 14;
                break;
            case "Siamese": yearsLiving = 16;
                break;
            case "Persian": yearsLiving = 15;
                break;
            case "Ragdoll": yearsLiving = 17;
                break;
            case "American Shorthair": yearsLiving = 13;
                break;
            case "Siberian": yearsLiving = 12;
                break;

            default: console.log(`${typeCat} is invalid cat!`);
                break;
        }
    }

    let monthsLiving = (yearsLiving * 12) / 6;

    if (typeCat === "British Shorthair" || typeCat === "Siamese" || typeCat === "Persian" || typeCat === "Ragdoll" || typeCat === "American Shorthair" || typeCat === "Siberian") {
        console.log(`${Math.floor(monthsLiving)} cat months`);
    }

}
solve(["Tom",
    "m"])


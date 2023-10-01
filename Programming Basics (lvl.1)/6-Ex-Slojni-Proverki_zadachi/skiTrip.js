function solve(input) {

    let days = Number(input[0]);
    let apartmentType = input[1];
    let rating = input[2];
    let nights = days - 1;
    let totalPrice = 0;

    switch (apartmentType) {
        case "room for one person": totalPrice = nights * 18.00;break;
        case "apartment": totalPrice = nights * 25.00;
            if(days < 10){
                totalPrice = totalPrice * 0.70;
            }

            else if(days >= 10 && days <= 15){
                totalPrice = totalPrice * 0.65;
            }

            else if(days > 15){
                totalPrice = totalPrice * 0.50;
            }
            break;
        case "president apartment": totalPrice = nights * 35.00;
        if(days < 10){
            totalPrice = totalPrice * 0.90;
        }

        else if(days >= 10 && days <= 15){
            totalPrice = totalPrice * 0.85;
        }

        else if(days > 15){
            totalPrice = totalPrice * 0.80;
        }
    }

    if (rating === "positive") {
        totalPrice = totalPrice * 1.25;
    }
    else if (rating === "negative") {
        totalPrice = totalPrice * 0.90;
    }
    console.log(totalPrice.toFixed(2))
}
solve(["14",
    "apartment",
    "positive"])

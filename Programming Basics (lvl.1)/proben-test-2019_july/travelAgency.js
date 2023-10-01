function solve(input) {

    let town = input[0];
    let packetType = input[1];
    let vipType = input[2];
    let days = Number(input[3]);

    let price = 0;

    // while (days === 0){
    //     console.log("Days must be positive number!");break;
    // }

    if (days < 0) {
        console.log("Days must be positive number!"); 
    }
    
        if (town === "Bansko" || town === "Borovets") {
            switch (packetType) {
                case "withEquipment": price = days * 100;
                    if (vipType === "yes") {
                        price = price * 0.90;
                    }
                    break;

                case "noEquipment": price = days * 80;
                    if (vipType === "yes") {
                        price = price * 0.95;
                    }
                    break;
            }
        }

        else if (town === "Varna" || town === "Burgas") {
            switch (packetType) {
                case "withBreakfast": price = days * 130;
                    if (vipType === "yes") {
                        price = price * 0.88;
                    }
                    break;

                case "noBreakfast": price = days * 100;
                    if (vipType === "yes") {
                        price = price * 0.93;
                    }
                    break;
            }
        }

        else { console.log("Invalid input!"); }

   

    if (price > 0) {
        console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`);
    }

}
solve(["Varna",
    "withBreakfast",
    "no",
    "0"])



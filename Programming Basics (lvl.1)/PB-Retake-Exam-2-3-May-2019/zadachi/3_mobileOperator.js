function solve(input) {

    let contractLenght = input[0];
    let contractType = input[1];
    let mobileNet = input[2];
    let monthsToPay = Number(input[3]);

    let totalSum = 0;
    let tax = 0;

    if (contractLenght === "one") {
        switch (contractType) {
            case "Small":
                tax = 9.98;
                break;
            case "Middle":
                tax = 18.99;
                break;
            case "Large":
                tax = 25.98;
                break;
            case "ExtraLarge":
                tax = 35.99;
                break;
        }
    }

    else if (contractLenght === "two") {
        switch (contractType) {
            case "Small":
                tax = 8.58;
                break;
            case "Middle":
                tax = 17.09;
                break;
            case "Large":
                tax = 23.59;
                break;
            case "ExtraLarge":
                tax = 31.79;
                break;
        }
        
    }

    switch (mobileNet) {
        case "yes":
            if (tax <= 10.00) {
                tax += 5.50;
            }
            else if (tax <= 30) {
                tax += 4.35;
            }
            else if (tax > 30) {
                tax += 3.85;
            }
            break;

        case "no":
            tax = tax;
            break;
    }

    totalSum = tax * monthsToPay;

    if(contractLenght === "two"){
        totalSum = totalSum * 0.9625;
    }

    console.log(`${totalSum.toFixed(2)} lv.`);

}
solve(["two",
"Large",
"no",
"10"])


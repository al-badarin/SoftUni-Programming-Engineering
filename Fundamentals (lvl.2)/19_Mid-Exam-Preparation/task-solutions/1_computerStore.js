function computerStore(input) {

    let index = 0;
    let command = input[index];
    index++;

    let price = 0;

    while (command !== "regular" && command !== "special") {

        let partPrice = Number(command);
        if (partPrice < 0) {
            console.log("Invalid price!");
            command = input[index];
            index++;
            continue;
        }
        price += partPrice;
        command = input[index];
        index++;
    }
    let taxes = price * 0.20;
    let totalPrice = price + taxes;

    if (command === "special") {
        totalPrice *= 0.90;
    }

    if (totalPrice == 0) {
        console.log("Invalid order!");
    } else {
        console.log(`Congratulations you've just bought a new computer!\n` +
            `Price without taxes: ${price.toFixed(2)}$\n` +
            `Taxes: ${taxes.toFixed(2)}$\n` +
            `-----------\n` +
            `Total price: ${totalPrice.toFixed(2)}$`);
    }
}
computerStore(([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special']))
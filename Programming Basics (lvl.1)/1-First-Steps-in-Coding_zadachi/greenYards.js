function greenYards(input){

    let price = Number(input[0] * 7.61);
    let discount = Number(0.18 * price);
    let finalPrice = Number(price - discount);

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

greenYards([550])
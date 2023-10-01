function evenPositionElement(input) {

    let resArr = [];
    for (let i = 0; i < input.length; i++) {
        if (i % 2 === 0) {
            resArr.push(input[i]);
        }
    }
    console.log(resArr.join(' '));
}
evenPositionElement(['20', '30', '40', '50', '60']);
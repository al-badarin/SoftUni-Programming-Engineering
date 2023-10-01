function squareOfStars(number) {

    for (let row = 1; row <= number; row++){
        let printLine = '';

        for (let col = 1; col <= number; col++){
            printLine += `* `;
        }
        console.log(printLine);
    }
}
squareOfStars(5);
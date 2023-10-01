function solve(startNumber, endNumber){

    let sum = 0;
    let printLine = '';

    for (let i = startNumber; i <= endNumber; i++){
        sum += i;

        if (i === endNumber){
            printLine += `${i}`;
        }
        else {
            printLine += `${i} `;
        }
    }
    console.log(printLine);
    console.log(`Sum: ${sum}`);
}
solve(5, 10);
solve(0, 26);
solve(50, 60);
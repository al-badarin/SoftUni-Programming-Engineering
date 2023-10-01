function solve(num) {

    //     SOLUTION 1

    let numToString = String(num);
    let sum = 0;

    for (let i = 0; i < numToString.length; i++) {
        sum += Number(numToString[i]);
    }

    let sumToString = String(sum);
    let isAmazing = false;

    for (let i = 0; i < sumToString.length; i++) {
        if (Number(sumToString[i]) === 9) {
            isAmazing = true;
            break;
        }
    }
    let amazing = isAmazing ? 'True' : 'False';
    console.log(`${num} Amazing? ${amazing}`);


    //     SOLUTION 2
    // let numToString = String(num);
    // let sum = 0;

    // for (let i = 0; i < numToString.length; i++){
    //     sum += Number(numToString[i]);
    // }
    // let result = String(sum).includes('9');
    // console.log(result ?
    //     `${num} Amazing? True` :
    //     `${num} Amazing? False`);
}
solve(1233);
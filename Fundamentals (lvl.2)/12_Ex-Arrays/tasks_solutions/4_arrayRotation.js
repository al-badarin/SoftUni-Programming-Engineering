function solve(arr, numOfRotations){

    while (numOfRotations > 0){
        let elementToMove = arr.shift();
        arr.push(elementToMove);
        numOfRotations--;
    }
    console.log(arr.join(` `));
}
solve([51, 47, 32, 61, 21], 2);
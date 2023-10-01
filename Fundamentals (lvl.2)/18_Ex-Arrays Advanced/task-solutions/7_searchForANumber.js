function searchForANumber(arr, input) {

    let numbersToTakeFromArr = input[0];
    let deletedNumbersFromArr = input[1];
    let searchedNumber = input[2];

    let myNewArr = arr.splice(0, numbersToTakeFromArr);
    myNewArr = myNewArr.splice(deletedNumbersFromArr);

    let counter = 0;
    for (let i = 0; i < myNewArr.length; i++) {
        if (myNewArr[i] === searchedNumber) {
            counter++;
        }
    }
    console.log(`Number ${searchedNumber} occurs ${counter} times.`);
}
searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
function sumFirstAndLast(arr) {

    let firstNumber = arr[0];
    let lastNumber = arr[arr.length - 1];

    console.log(Number(firstNumber) + Number(lastNumber));

    //SECOND SOLUTION
    // let firstNumber = arr.shift();
    // let lastNumber = arr.pop();

    // console.log(Number(firstNumber) + Number(lastNumber));

}
sumFirstAndLast(['20', '30', '40']);
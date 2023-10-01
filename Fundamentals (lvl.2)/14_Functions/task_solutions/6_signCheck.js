function signCheck(numOne, numTwo, numThree) {

    let res = numOne * numTwo * numThree;
    if (res < 0) {
        console.log("Negative");
    }
    else {
        console.log("Positive");
    }
}
signCheck(5, 12, -15);
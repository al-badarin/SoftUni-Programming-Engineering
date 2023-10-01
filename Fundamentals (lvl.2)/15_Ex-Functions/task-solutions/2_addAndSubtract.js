function addAndSubtract(firstNum, secondNum, thirdNum) {

    let sumFirstAndSecond = sum(firstNum, secondNum);

    console.log(subtract(sumFirstAndSecond, thirdNum));

    function sum(firstNum, secondNum) {
        return firstNum + secondNum;
    }
    function subtract(sumFirstAndSecond, thirdNum) {
        return sumFirstAndSecond - thirdNum;
    }
}
addAndSubtract(23, 6, 10);
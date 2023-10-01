function sumFirstLast(input) {

    let firstElement = Number(input.shift());
    let lastElement = Number(input.pop());

    let sum = firstElement + lastElement;
    return sum;

}
sumFirstLast(['20', '30', '40']);
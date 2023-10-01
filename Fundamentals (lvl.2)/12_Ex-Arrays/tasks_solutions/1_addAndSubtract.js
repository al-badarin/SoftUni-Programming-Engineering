function solve(arr) {

    let originalArraySum = 0;
    let newArraySum = 0;
    let arrL = arr.length;

    for (let n = 0; n < arrL; n++) {
        originalArraySum += arr[n];

        if (arr[n] % 2 === 0) {
            arr[n] += n;
        }
        else {
            arr[n] -= n;
        }
        newArraySum += arr[n];
    }
    console.log(arr);
    console.log(originalArraySum);
    console.log(newArraySum);
}
solve([5, 15, 23, 56, 35]);
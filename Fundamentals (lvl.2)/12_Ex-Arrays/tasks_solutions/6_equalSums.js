function solve(arr) {

    let foundIndex = 'no';
    let inputL = arr.length;

    for (let i = 0; i < inputL; i++) {

        let leftSum = 0;
        let rigtSum = 0;
        for (let l = 0; l < i; l++) {
            leftSum += arr[l];
        }
        for (let r = i + 1; r < inputL; r++) {
            rigtSum += arr[r];
        }

        if (leftSum === rigtSum) {
            foundIndex = i;
        }
    }
    console.log(foundIndex);
}
solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
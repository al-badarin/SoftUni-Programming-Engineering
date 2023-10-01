function solve(arr) {

    let newArray = [];
    let arrL = arr.length;


    for (let i = 0; i < arrL; i++) {
        let num1 = arr[i];
        let isLargest = true;

        for (let j = i + 1; j < arrL; j++) {
            let num2 = arr[j];

            if (num1 <= num2) {
                isLargest = false;
            }
        }
        if (isLargest) {
            newArray.push(num1);
        }

    }
    console.log(newArray.join(` `));
}
solve([1, 4, 3, 2]);
solve([14, 24, 3, 19, 15, 17]);
solve([41, 41, 34, 20]);
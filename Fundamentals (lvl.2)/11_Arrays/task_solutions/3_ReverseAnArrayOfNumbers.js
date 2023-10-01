function solve(n, numbers) {

    let result = [];
    for (let i = 0; i < n; i++) {
        result.push(numbers[i]);
    }

    let output = " ";
    for (let i = result.length - 1; i >= 0; i--) {
        output += `${numbers[i]} `;
    }
    console.log(output);

    //2nd solution (shorter)
    // let result = [];

    // for (let r = n - 1; r>= 0; r--){
    //     result.push(number[r]);
    // }
    // console.log(result.join(" "));

}
solve(3, [10, 20, 30, 40, 50]);
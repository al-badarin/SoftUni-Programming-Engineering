function processOddNumbers(numbers) {

    let filteredNumbers = numbers.filter((el, i) => i % 2 == 1);

    let doubledNumbers = filteredNumbers.map(x => x * 2);

    let reversedNumbers = doubledNumbers.reverse();

    console.log(reversedNumbers.join(" "));
}
processOddNumbers([10, 15, 20, 25]);

//SHORTER (FUNCTIONAL) SOLUTION

// (numbers) => numbers.filter((el, i) => i % 2 == 1)
//                             .map(x => x * 2)
//                             .reverse()
//                             .join(" ")
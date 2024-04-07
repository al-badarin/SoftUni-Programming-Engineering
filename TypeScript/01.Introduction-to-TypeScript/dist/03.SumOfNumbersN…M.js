// SOLUTION 1
function calculateSumOfNumbers(N, M) {
    const start = parseInt(N, 10);
    const end = parseInt(M, 10);
    if (isNaN(start) || isNaN(end)) {
        console.log("Invalid input. Please provide valid numbers.");
        return;
    }
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    console.log(`The sum of numbers from ${start} to ${end} is: ${sum}`);
}
calculateSumOfNumbers("hello", "5");
calculateSumOfNumbers("1", "5");
calculateSumOfNumbers("-8", "20");
// **SOLUTION 2
// function calculateSumOfNumbers(N: string, M: string): void {
//   const start: number = parseInt(N, 10);
//   const end: number = parseInt(M, 10);
//   if (isNaN(start) || isNaN(end)) {
//     console.log("Invalid input. Please provide valid numbers.");
//     return;
//   }
//   // Calculate the number of terms in the series
//   const numberOfTerms: number = end - start + 1;
//   // Calculate the first term (a_1) and the last term (a_n)
//   const firstTerm: number = start;
//   const lastTerm: number = end;
//   // Calculate the sum using the formula for arithmetic series
//   const sum: number = (numberOfTerms / 2) * (firstTerm + lastTerm);
//   console.log(`The sum of numbers from ${start} to ${end} is: ${sum}`);
// }
// calculateSumOfNumbers("hello", "5");
// calculateSumOfNumbers("1", "5");
// calculateSumOfNumbers("-8", "20");
// **SOLUTION 3
// function sumOfNumbers(N: number, M: number) {
//   let sum: number = 0;
//   for (let i = N; i <= M; i++) {
//     sum += 1;
//   }
//   console.log(`The sum of numbers from ${N} to ${M} is: ${sum}`);
// }
// const N: number = parseInt("3", 10);
// const M: number = parseInt("7", 10);
// sumOfNumbers(N, M);

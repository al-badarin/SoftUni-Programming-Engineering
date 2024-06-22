function printAndSum(startIndex: number, endIndex: number): void {
  let sum: number = 0;
  let numbers: string = "";

  for (let i: number = startIndex; i <= endIndex; i++) {
    numbers += i + " ";
    sum += i;
  }

  console.log(numbers.trim());
  console.log(`Sum: ${sum}`);
}

// Test cases
printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);

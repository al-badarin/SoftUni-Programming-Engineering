function findLargestNumber(num1: number, num2: number, num3: number): void {
  let largest: number;

  if (num1 >= num2 && num1 >= num3) {
    largest = num1;
  } else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
  } else {
    largest = num3;
  }

  console.log(`The largest number is ${largest}.`);
}

findLargestNumber(5, -3, 16);
findLargestNumber(-3, -5, -22.5);

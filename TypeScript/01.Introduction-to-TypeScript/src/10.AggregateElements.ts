function aggregateElements(elements: number[]): void {
  // sum of all elements
  const sum: number = elements.reduce((acc, curr) => acc + curr, 0);
  console.log(sum);

  // sum of the inverse values (1/ai) of all elements
  const inverseSum: number = elements.reduce((acc, curr) => acc + 1 / curr, 0);
  console.log(inverseSum);

  // concatenate the string representations of all elements
  const concatenated: string = elements.join("");
  console.log(concatenated);
}

// Test the function
aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);

function getBiggerHalf(arr: number[]): number[] {
  arr.sort((a, b) => a - b);

  const halfIndex: number = Math.ceil(arr.length / 2);

  return arr.slice(arr.length % 2 === 0 ? halfIndex : halfIndex - 1);
}

// Test the function
console.log(getBiggerHalf([4, 7, 2, 5])); // Output: [5, 7]
console.log(getBiggerHalf([3, 19, 14, 7, 2, 19, 6])); // Output: [7, 14, 19, 19]

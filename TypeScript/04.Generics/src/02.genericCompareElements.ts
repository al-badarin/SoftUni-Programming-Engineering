class CompareElements<T> {
  constructor(private elements: T[]) {}

  compare(comparator: T): number {
    let count = 0;
    for (const element of this.elements) {
      if (element === comparator) {
        count++;
      }
    }
    return count;
  }
}

// Test the CompareElements class with different types of arrays
let c1 = new CompareElements(["a", "b", "ab", "abc", "cba", "b"]);
console.log(c1.compare("b")); // Output: 2

let c2 = new CompareElements([1, 2, 3, 4, 5, 1, 1]);
console.log(c2.compare(1)); // Output: 3

class Box<T> {
  constructor(private data: T) {}

  toString(): string {
    return `${this.data} is of type ${typeof this.data}`;
  }
}

// Test the Box class with different types of data
let box1 = new Box(["test"]);
let box2 = new Box(20);
let box3 = new Box("Hello");

console.log(box1.toString()); // Output: test is of type object
console.log(box2.toString()); // Output: 20 is of type number
console.log(box3.toString()); // Output: Hello is of type string

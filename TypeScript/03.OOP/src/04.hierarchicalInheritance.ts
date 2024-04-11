class Animal {
  eat(): void {
    console.log("eating...");
  }
}

class Dog extends Animal {
  bark(): void {
    console.log("barking...");
  }
}

class Cat extends Animal {
  meow(): void {
    console.log("meowing...");
  }
}

// Test the classes
const dog = new Dog();
dog.eat(); // Outputs: eating...
dog.bark(); // Outputs: barking...

console.log("----------------");

const cat = new Cat();
cat.eat(); // Outputs: eating...
cat.meow(); // Outputs: meowing...

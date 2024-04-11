class Animal {
    eat() {
        console.log("eating...");
    }
}
class Dog extends Animal {
    bark() {
        console.log("barking...");
    }
}
class Cat extends Animal {
    meow() {
        console.log("meowing...");
    }
}
// Test the classes
const dog = new Dog();
dog.eat(); // Outputs: eating...
dog.bark(); // Outputs: barking...
console.log('----------------');
const cat = new Cat();
cat.eat(); // Outputs: eating...
cat.meow(); // Outputs: meowing...

class Person {
    _name;
    _age;
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    displayPersonInfo() {
        console.log(`${this._name} is ${this._age} years old.`);
    }
}
// Test the Person class
const person1 = new Person("Peter", 12);
const person2 = new Person("Sofia", 33);
person1.displayPersonInfo();
person2.displayPersonInfo();

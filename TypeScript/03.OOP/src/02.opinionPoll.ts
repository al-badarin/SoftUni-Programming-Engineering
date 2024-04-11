class Person {
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }

  displayPersonInfo(): void {
    console.log(`${this._name} is ${this._age} years old.`);
  }
}

// Test the Person class
const person1 = new Person("Peter", 12);
const person2 = new Person("Sofia", 33);

person1.displayPersonInfo();
person2.displayPersonInfo();

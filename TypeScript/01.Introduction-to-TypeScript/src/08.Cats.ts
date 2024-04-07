class Cat {
  constructor(private name: string, private age: number) {}

  meow(): void {
    console.log(`${this.name}, age ${this.age} says Meow`);
  }
}

function createCats(catStrings: string[]): void {
  for (let catStr of catStrings) {
    const [name, ageStr] = catStr.split(" ");
    const age: number = parseInt(ageStr, 10);

    const cat: Cat = new Cat(name, age);
    cat.meow();
  }
}

// Test the function
createCats(["Mellow 2", "Tom 5"]);
createCats(["Candy 1", "Poppy 3", "Nyx 2"]);

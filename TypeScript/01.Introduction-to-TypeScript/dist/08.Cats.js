class Cat {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    meow() {
        console.log(`${this.name}, age ${this.age} says Meow`);
    }
}
function createCats(catStrings) {
    for (let catStr of catStrings) {
        const [name, ageStr] = catStr.split(" ");
        const age = parseInt(ageStr, 10);
        const cat = new Cat(name, age);
        cat.meow();
    }
}
// Test the function
createCats(["Mellow 2", "Tom 5"]);
createCats(["Candy 1", "Poppy 3", "Nyx 2"]);

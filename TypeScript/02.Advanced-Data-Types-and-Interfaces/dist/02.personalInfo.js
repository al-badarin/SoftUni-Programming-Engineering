function createPerson(firstName, lastName, age) {
    const person = {
        firstName: firstName,
        lastName: lastName,
        age: parseInt(age),
    };
    return person;
}
// Test the function
const person1 = createPerson("Peter", "Pan", "20");
console.log(person1);
const person2 = createPerson("George", "Smith", "18");
console.log(person2);
// **SOLUTION 2
// interface Person {
//   firstName: string;
//   lastName: string;
//   age: number;
// }
// function createPerson(person: Person): Person {
//   return person;
// }
// const person1: Person = {
//   firstName: "Peter",
//   lastName: "Pan",
//   age: 20,
// };
// const person2: Person = {
//   firstName: "George",
//   lastName: "Smith",
//   age: 18,
// };
// const createdPerson1: Person = createPerson(person1);
// console.log(createdPerson1);
// const createdPerson2: Person = createPerson(person2);
// console.log(createdPerson2);

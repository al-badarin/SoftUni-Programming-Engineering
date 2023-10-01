function employees(input) {

    let listObj = {};

    for (let person of input) {
        listObj.name = person;
        listObj.number = person.length;
        console.log(`Name: ${listObj.name} -- Personal Number: ${listObj.number}`);
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);
function adressBook(data) {

    let result = {};

    for (let line of data) {
        let [name, adress] = line.split(":");
        result[name] = adress;
    }

    let entries = Object.entries(result);
    let sortEntries = entries.sort(([keyA, valueA], [keyB, valueB]) => {
        return keyA.localeCompare(keyB)
    });

    for (let [name, adress] of sortEntries) {
        console.log(name, "->", adress);
    }
}
adressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);
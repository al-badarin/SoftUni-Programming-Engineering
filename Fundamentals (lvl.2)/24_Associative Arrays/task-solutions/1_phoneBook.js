function phoneBook(data) {

    let phoneBooks = {};

    for (let line of data){
        let [name, phoneNumber] = line.split(" ");
        phoneBooks[name] = phoneNumber;
    }

    for (let key in phoneBooks){
        console.log(`${key} -> ${phoneBooks[key]}`);
    }
}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);
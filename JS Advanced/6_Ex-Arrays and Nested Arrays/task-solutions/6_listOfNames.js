function listOfNames(arr) {

    let sortedArr = arr.sort((a, b) => a.localeCompare(b));

    let orderNumber = 1;

    sortedArr.forEach(name => {
        console.log(`${orderNumber}.${name}`);
        orderNumber++;
    });
}
listOfNames(["John", "Bob", "Christina", "Ema"]);
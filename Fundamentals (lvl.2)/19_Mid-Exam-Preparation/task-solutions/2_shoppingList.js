function shoppingList(input) {

    let list = input.shift().split("!");

    let index = 0;
    let command = input[index];
    index++;

    while (command !== "Go Shopping!") {
        let tokens = command.split(" ");
        let operation = tokens.shift();

        switch (operation) {
            case "Urgent":
                for (let el of tokens) {
                    if (!list.includes(el)) {
                        list.unshift(el);
                    }
                }
                break;

            case "Unnecessary":
                for (let el of tokens) {
                    if (list.includes(el)) {
                        list.splice(list.indexOf(el), 1);
                    }
                }
                break;

            case "Correct":
                let oldItem = tokens[0];
                let newItem = tokens[1];
                if (list.includes(oldItem)) {
                    // list.push(oldItem);
                    list.splice(list.indexOf(oldItem), 1, newItem);
                } else {
                    command = input[index];
                    index++;
                    continue;
                }
                break;

            case "Rearrange":
                for (let el of tokens) {
                    if (list.includes(el)) {
                        list.splice(list.indexOf(el), 1);
                        list.push(el);
                    }
                }
                break;
        }
        command = input[index];
        index++;
    }
    console.log(list.join(", "));
}
// shoppingList([
//     "Tomatoes!Potatoes!Bread",//grocery list
//     "Unnecessary Milk",
//     "Urgent Tomatoes",
//     "Go Shopping!"
// ]);
shoppingList([
    "Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"
])

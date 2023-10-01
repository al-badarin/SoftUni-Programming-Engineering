function inventory(input) {

    let state = input.shift().split(', ');

    let index = 0;
    let command = input[index];
    index++;

    while (command !== "Craft!") {
        let tokens = command.split(" - ");
        let operation = tokens.shift();

        switch (operation) {
            case "Collect":
                for (let el of tokens) {
                    if (!state.includes(el)) {
                        state.push(el);
                    }
                }
                break;

            case "Drop":
                for (let el of tokens) {
                    if (state.includes(el)) {
                        state.splice(state.indexOf(el), 1);
                    }
                }
                break;

            case "Combine Items":
                let combinedItems = tokens[0];
                let sepparated = combinedItems.split(":");
                let oldItem = sepparated[0];
                let newItem = sepparated[1];
                if (state.includes(oldItem)) {
                    state.splice(state.indexOf(oldItem), 0, newItem);
                } else {
                    command = input[index];
                    index++;
                    continue;
                }
                break;

            case "Renew":
                for (let el of tokens) {
                    if (state.includes(el)) {
                        state.splice(state.indexOf(el), 1);
                        state.push(el);
                    }
                }
                break;
        }
        command = input[index];
        index++;
    }
    console.log(state.join(", "));
}
// inventory([
//     'Iron, Sword',
//     'Drop - Bronze',
//     'Combine Items - Sword:Bow',
//     'Renew - Iron',
//     'Craft!'
// ]);
inventory([
    'Iron, Wood, Sword',
    'Collect - Gold',
    'Drop - Wood',
    'Craft!'
]);
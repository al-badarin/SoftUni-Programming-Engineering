function arrayManipulations(commands) {

    let arr = commands.shift().split(" ").map(Number);

    for (let i = 0; i < commands.length; i++) {
        let [command, firstNum, secondNum] = commands[i].split(" ");

        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch (command) {
            case "Add": function add(el) {
                arr.push(firstNum);
            }
                add();
                break;
            case "Remove": function remove(num) {
                arr = arr.filter(x => x !== firstNum);
            }
                remove();
                break;
            case "RemoveAt": function removeAt(index) {
                arr.splice(firstNum, 1);
            }
                removeAt();
                break;
            case "Insert": function insert(num, index) {
                arr.splice(firstNum, 1, secondNum);
            }
                insert();
                break;
        }

    }
    console.log(arr.join(" "));

}
arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
);
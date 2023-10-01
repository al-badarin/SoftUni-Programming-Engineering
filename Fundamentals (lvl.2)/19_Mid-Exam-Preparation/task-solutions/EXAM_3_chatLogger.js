function chatLogger(input) {

    let index = 0;
    let command = input[index];
    index++;

    let arr = [];

    while (command !== "end") {
        let tokens = command.split(" ");
        let operation = tokens[0];

        let message = tokens[1];

        switch (operation) {
            case "Chat":
                arr.push(message);
                break;


            case "Delete":
                if (arr.includes(message)) {
                    arr.splice(arr.indexOf(message), 1)
                } else {
                    command = input[index];
                    index++;
                    continue;
                }
                break;


            case "Edit":
                let editedVersion = tokens[2];
                if (arr.includes(message)) {
                    arr.splice(arr.indexOf(message), 1, editedVersion);
                } else {
                    command = input[index];
                    index++;
                    continue;
                }
                break;


            case "Pin":
                if (arr.includes(message)) {
                    arr.splice(arr.indexOf(message), 1)
                    arr.push(message);

                } else {
                    command = input[index];
                    index++;
                    continue;
                }
                break;


            case "Spam":
                for (let i = 1; i < tokens.length; i++) {
                    let message = tokens[i];
                    arr.push(message);
                }
                break;
        }

        command = input[index];
        index++;
    }

    console.log(arr.join("\n"));
}
chatLogger(["Chat Hello",
    "Chat darling",
    "Edit darling Darling",
    "Spam how are you",
    "Delete Darling",
    "end"]);

console.log("----------------");

chatLogger(["Chat Hello",
    "Delete John",
    "Pin Hi",
    "end"]);

console.log("----------------");

chatLogger(["Chat John",
    "Spam Let's go to the zoo",
    "Edit zoo cinema",
    "Chat tonight",
    "Pin John",
    "end"]);
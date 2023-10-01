function movingTarget(input) {

    let target = input.shift().split(" ").map(Number);

    let index = 0;
    let command = input[index];
    index++;

    while (command !== "End") {
        let tokens = command.split(" ");
        let operation = tokens.shift();

        let elementIndex = Number(tokens[0]);

        switch (operation) {
            case "Shoot":
                let power = Number(tokens[1]);
                if (elementIndex >= 0 && elementIndex < target.length) {
                    target[elementIndex] -= power;

                    if (target[elementIndex] <= 0) {
                        target.splice(elementIndex, 1)
                    }
                }
                break;

            case "Add":
                let value = Number(tokens[1]);
                if (elementIndex >= 0 && elementIndex < target.length) {
                    target.splice(elementIndex, 0, value);
                } else {
                    console.log("Invalid placement!");
                }
                break;

            case "Strike":
                let radius = Number(tokens[1]);
                if(elementIndex - radius >= 0 && radius + elementIndex < target.length){
                    target.splice(elementIndex - radius, radius * 2 + 1)
                } else {
                    console.log("Strike missed!");
                }
                break;
        }
        command = input[index];
        index++;
    }
    console.log(target.join("|"));
}
movingTarget(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"]);
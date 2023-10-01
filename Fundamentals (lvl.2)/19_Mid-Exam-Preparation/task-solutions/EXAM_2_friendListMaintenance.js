function friendListMaintenance(input) {

    let list = input.shift().split(', ');

    let index = 0;
    let command = input[index];
    index++;

    let countBlacklisted = 0;
    let countLostNames = 0;

    let isBlacklisted = false;

    while (command !== "Report") {
        let tokens = command.split(" ");
        let operation = tokens.shift();

        switch (operation) {
            case "Blacklist":

                isBlacklisted = true;
                let name = tokens[0];
                let currentName = name;
                if (list.includes(name)) {
                    name = "Blacklisted";
                    countBlacklisted++;
                    list.splice(currentName, 1, name)
                    console.log(`${currentName} was blacklisted.`);
                } else {
                    console.log(`${currentName} was not found.`);
                    command = input[index];
                    index++;
                    continue;
                }
                break;


            case "Error":
                let elementIndex = Number(tokens[0]);
                if (elementIndex >= 0 && elementIndex < list.length && list[elementIndex] !== "Blacklisted" && list[elementIndex] != undefined && list[elementIndex] != "Lost") {
                    let curName = list[elementIndex];
                    // if (curName !== "Lost") {
                        list.splice(list.indexOf(curName), 1, "Lost");
                        countLostNames++;
                        console.log(`${curName} was lost due to an error.`);
                    //}
                }
                else {
                    command = input[index];
                    index++;
                    continue;
                }
                break;


            case "Change":
                let elIndex = Number(tokens[0]);
                let newName = tokens[1];
                if (elIndex >= 0 && elIndex < list.length && list[elIndex] !== "Blacklisted" && list[elIndex] != undefined && list[elIndex] != "Lost") {
                    let curName = list[elIndex];
                    list.splice(list[elIndex], 1, newName);
                    console.log(`${curName} changed his username to ${newName}.`);
                }
                else {
                    command = input[index];
                    index++;
                    continue;
                }
                break;
        }

        command = input[index];
        index++;
    }

    console.log(`Blacklisted names: ${countBlacklisted}`);
    console.log(`Lost names: ${countLostNames}`);
    console.log(list.join(" "));

}
friendListMaintenance(["Mike, John, Eddie",
    "Blacklist Mike",
    "Error 0",
    "Report"]);

console.log("--------------------");

friendListMaintenance(["Mike, John, Eddie, William",
    "Error 3",
    "Error 3",
    "Change 0 Mike123",
    "Report"]);

console.log("--------------------");

friendListMaintenance(["Mike, John, Eddie, William",
    "Blacklist Maya",
    "Error 1",
    "Change 4 George",
    "Report"]);
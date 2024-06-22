function easterEggs(input) {
    let text = input[0];
    let pattern = /[@|#]+(?<color>[a-z]{3,})[@|#]+\W*[\/]+(?<count>[0-9]+)[\/]+/g;

    let totalEggs = 0;
    let buff = '';

    let match = pattern.exec(text);

    while (match) {
        let color = match.groups['color'];
        let amount = Number(match.groups['count']);
        totalEggs += amount;
        buff += `You found ${amount} ${color} eggs!\n`;

        match = pattern.exec(text);
    }
    console.log(buff);
}
easterEggs(['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/']);

console.log('-----------------------');

easterEggs(['#@##@red@#/8/@rEd@/2/#@purple@////10/']);
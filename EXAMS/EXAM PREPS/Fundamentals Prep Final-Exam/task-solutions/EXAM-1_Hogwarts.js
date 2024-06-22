function hogwarts(input) {

    let spell = input.shift();
    let command = input.shift();

    while (command !== 'Abracadabra') {
        command = command.split(' ');
        let action = command[0];
        if (action !== "Abjuration" && action !== "Necromancy" && action !== "Illusion" && action !== "Divination" && action !== 'Alteration') {
            console.log(`The spell did not work!`);
        }

        switch (action) {
            case 'Abjuration':
                spell = spell.toUpperCase();
                console.log(spell);
                break;

            case 'Necromancy':
                spell = spell.toLowerCase();
                console.log(spell);
                break;

            case 'Illusion':
                let index = Number(command[1]);
                let letterToReplace = command[2];
                if (index < 0 || index > spell.length) {
                    console.log('The spell was too weak.');
                } else {
                    spell = spell.slice(0, index) + letterToReplace + spell.slice(index + letterToReplace.length)
                    console.log('Done!');
                }
                break;

            case 'Divination':
                let firstSubstr = command[1];
                let secondSubstr = command[2];
                while (spell.includes(firstSubstr)) {
                    spell = spell.replace(firstSubstr, secondSubstr);
                }
                console.log(spell);
                if (spell.includes(!firstSubstr)) {
                    break;
                }
                break;

            case 'Alteration':
                let substr = command[1];
                while (spell.includes(substr)) {
                    spell = spell.replace(substr, '');
                }
                console.log(spell);
                if (spell.includes(!substr)) {
                    break;
                }
                break;
        }
        command = input.shift();
    }
}
// hogwarts([
//     "A7ci0",
//     "Illusion 1 c",
//     // 'Divination c l',
//     // 'Alteration c',
//     "Illusion 4 o",
//     "Abjuration",
//     "Abracadabra"
// ]);

console.log('-----------------------');

hogwarts([
    "TR1GG3R",
    "Necromancy",
    "Illusion 8 m",
    "Illusion 9 n",
    "Abracadabra"
]);

console.log('-----------------------');

// hogwarts([
//     "SwordMaster",
//     "Target Target Target",
//     "Abjuration",
//     "Necromancy",
//     "Alteration master",
//     "Abracadabra"
// ]);
function cardGame(input) {
    let valueObj = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14,
    }
    let typeObj = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1,
    }
    let result = {};

    for (const line of input) {
        let [name, cards] = line.split(': ');
        if (result.hasOwnProperty(name)) {
            let oldCardsArr = result[name];
            let cardsArr = cards.split(', ');
            for (const card of cardsArr) {
                if (!oldCardsArr.includes(card)) {
                    oldCardsArr.push(card);
                }
            }
            result[name] = oldCardsArr;
        } else {
            let cardsArr = cards.split(', ');
            let uniqueArr = [];
            for (const card of cardsArr) {
                if (!uniqueArr.includes(card)) {
                    uniqueArr.push(card);
                }
            }
            result[name] = uniqueArr;
        }
    }

    for (const [name, cards] of Object.entries(result)) {
        let sum = 0;
        for (const card of cards) {
            let cardAsArray = card.split('');
            let cardType = cardAsArray.pop();
            let cardValue = cardAsArray.join('');
            sum += valueObj[cardValue] * typeObj[cardType];
        }
        result[name] = sum;
    }

    for (const key in result) {
        console.log(`${key}: ${result[key]}`);
    }
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);
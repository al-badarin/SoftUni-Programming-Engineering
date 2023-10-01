function dictionary(input) {

    let dictionaryArr = [];
    let line = input.shift().split('|');

    for (let el of line) {
        let [word, definition] = el.split(': ')
        if (!dictionaryArr.hasOwnProperty(word)) {
            dictionaryArr[word] = {
                definition
            };

        }

        let lineOfWords = input.shift().split('|');
        let wordsToTest = [];
        for (let el of lineOfWords) {
            wordsToTest.push(el);
        }


        let command = input.pop();
        if (command === 'Test') {
            while(dictionaryArr.hasOwnProperty(key[wordsToTest])){
                console.log();
            }
        }
        else if (command === 'Hand Over'){
            console.log(dictionaryArr.join(' '));
        }
    }
}
dictionary([
    "programmer: an animal, which turns coffee into code | developer: a magician",
    "fish | domino",
    "Hand Over"
])

console.log('-------------');

([
    "care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin",
    "care | kitchen | flower",
    "Test"
]);

console.log('-------------');

([
    "tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance",
    "bit | code | tackle",
    "Test"
]);
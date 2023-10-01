function countStringOccurrences(text, word) {

    let textArr = text.split(' ');
    // let count = textArr.filter(x => x === word).length
    // console.log(count);

    let counter = 0;
    for (let w of textArr) {
        if (w === word) {
            counter++;
        }
    }
    console.log(counter);
}
countStringOccurrences('This is a word and it also is a sentence',
    'is');
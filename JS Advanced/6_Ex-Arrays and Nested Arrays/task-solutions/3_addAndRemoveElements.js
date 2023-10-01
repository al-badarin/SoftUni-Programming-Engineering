function addAndRemoveElements(input) {

    let newArr = [];
    for (let i = 0; i < input.length; i++) {
        let command = input[i];
        if (command === 'add') {
            newArr.push(i + 1);
        } else if (command === 'remove') {
            newArr.pop();
        }
    }
    if (newArr.length === 0) {
        console.log('Empty');
    } else {
        console.log(newArr.join('\n'));
    }
}
addAndRemoveElements([
    'add',
    'add',
    'remove',
    'add',
    'add'
]);
function solve(str, char, result) {

    //console.log(str.replace('_', char) === result ? 'Matched' : 'Not Matched');
    
    let res = '';
    for (i = 0; i < str.length; i++) {
        let currentChar = str[i];

        if (currentChar === '_') {
            res += char;
        }
        else {
            res += currentChar;
        }
    }

    if (res === result) {
        console.log('Matched');
    }
    else {
        console.log('Not Matched');
    }
}
solve('Str_ng', 'I', 'Strong');
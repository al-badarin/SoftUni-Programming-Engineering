function solve(symbol) {

    let result = '';

    if (symbol === symbol.toUpperCase()) {
        result = 'upper-case';
    }
    else {
        result = 'lower-case';
    }
    console.log(result);
}
solve('L');
solve('f');
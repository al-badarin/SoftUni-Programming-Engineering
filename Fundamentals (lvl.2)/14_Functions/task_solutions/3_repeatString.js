function repeatString(text, n) {

    let buff = "";

    for (let i = 0; i < n; i++) {
        buff += text;
    }
    return buff;
}
console.log(repeatString("abc", 3));
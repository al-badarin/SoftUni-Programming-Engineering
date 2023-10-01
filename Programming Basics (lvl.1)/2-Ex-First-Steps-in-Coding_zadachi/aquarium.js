function solve(input){

    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentage = Number(input[3]);

    let obem = length * width * height;
    let obemLitri = obem / 1000;
    let zaetoProstr = 0.17

    let result = obemLitri * (1 - zaetoProstr);

    console.log(result);
}

solve(["85", "75", "47", "17"])
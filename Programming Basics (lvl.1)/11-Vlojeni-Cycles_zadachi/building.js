function solve(input) {

    let floors = Number(input[0]);
    let rooms = Number(input[1]);

    for (let a = floors; a > 0; a--) {
        let buff = "";
        for (let b = 0; b < rooms; b++) {
            if (a === floors) {
                buff += "L" + a + b + " ";
            } else if (a % 2 === 0) {
                buff += "O" + a + b + " ";
            } else {
                buff += "A" + a + b + " ";
            }
        }
        console.log(buff);
    }
}
solve(["6", "4"])
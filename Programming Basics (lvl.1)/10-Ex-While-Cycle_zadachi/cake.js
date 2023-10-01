function solve(input){

    let w = Number(input[0]);
    let l = Number(input[1]);
    
    let piecesNumber = w*l;
    let index = 2;
    let command = input[index];

    while (command !== "STOP"){
        let piecesTaken = Number(command);
        piecesNumber -= piecesTaken;

        if (piecesNumber < 0){
            console.log(`No more cake left! You need ${Math.abs(piecesNumber)} pieces more.`);
            break;
        }
        index++;
        command = input[index];
    }
    if (command === "STOP"){
        console.log(`${piecesNumber} pieces are left.`);
    }
}
solve(["10",
"2",
"2",
"4",
"6",
"STOP"])

function solve(input){

    let run1 = Number (input[0]);
    let run2 = Number (input[1]);
    let run3 = Number (input[2]);

    let totalTime = run1 + run2 + run3;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10){
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}
solve(["35", "45", "44"])
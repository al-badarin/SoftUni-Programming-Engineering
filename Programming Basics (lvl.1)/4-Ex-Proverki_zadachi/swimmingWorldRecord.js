function solve(input) {

    let record = Number(input[0]);
    let distance = Number(input[1]);
    let timeForOneMeter = Number(input[2]);

    let totalSeconds = distance * timeForOneMeter;
    let delay = Math.floor(distance / 15) * 12.5;
    let totalTime = totalSeconds + delay;

    if (totalTime < record) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(totalTime - record).toFixed(2)} seconds slower.`);

    }

}
solve(["10464",
"1500",
"20"])


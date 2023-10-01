function solve(input) {

    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinute = Number(input[3]);

    let timeExam = examHour * 60 + examMinute;
    let timeArrive = arrivalHour * 60 + arrivalMinute;

    let diff = Math.abs(timeArrive - timeExam);
    let h = Math.floor(diff / 60);
    let m = diff % 60;

    if (timeExam < timeArrive) {
        console.log("Late");
        if (diff >= 60) {
            if (m < 10) {
                console.log(`${h}:0${m} hours after the start`)
            }
            else {
                console.log(`${h}:${m} hours after the start`)
            }
        }
        else {
            console.log(`${diff} minutes after the start`);
        }
    }
    else if (timeArrive === timeExam || timeExam - timeArrive <= 30) {
        console.log("On time");
        if (diff !== 0) {
            console.log(`${diff} minutes before the start`)
        }
    }
    else {
        console.log("Early");
        if (diff >= 60) {
            if (m < 10) {
                console.log(`${h}:0${m} hours before the start`)
            }
            else {
                console.log(`${h}:${m} hours before the start`)
            }
        }
        else {
            console.log(`${diff} minutes before the start`);
        }
    }
}
solve(["9",
    "00",
    "8",
    "30"])


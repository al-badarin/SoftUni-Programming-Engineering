function bonusScoringSystem(input) {

    let numStudents = Number(input[0]);
    let numLectures = Number(input[1]);
    let addBonus = Number(input[2]);

    let totalBonus = 0;
    let studentAttendance = 0;
    let studentAttendance2 = 0;
    let maxBonus = 0;

    for (let i = 3; i < input.length; i++) {
        studentAttendance = Number(input[i]);
        totalBonus = studentAttendance / numLectures * (5 + addBonus);

        for (let j = i + 1; j < input.length; j++) {
            studentAttendance2 = Number(input[j]);
            maxBonus = studentAttendance2 / numLectures * (5 + addBonus);
            j++
            break;
        }

        if (totalBonus > maxBonus) {
            maxBonus = totalBonus;
            console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
            break;
        }
    }
    console.log(`The student has attended ${studentAttendance} lectures.`);
}

bonusScoringSystem([
    "10", //number of students
    "30", //number of the lectures
    "14", //number of the add bonus
    "8", //attendance student 1
    "23", //attendance student 2
    "27",//attendance student 3
    "28",//attendance student 4
    "15",//attendance student 5
    "17",//attendance student 6
    "25",//attendance student 7
    "26",//attendance student 8
    "5",//attendance student 9
    "18"//attendance student 10
])

// bonusScoringSystem(['5',  //number of students
//     '25', //number of the lectures
//     '30', //number of the add bonus
//     '12', //attendance student 1
//     '19', //attendance student 2
//     '24', //attendance student 3
//     '16', //attendance student 4
//     '20'  //attendance student 5
// ])


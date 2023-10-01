function solve(input) {

    let index = 0;
    let name = input[index];
    index++;

    let badGrade = 0;
    let sumGrade = 0;
    let i = 1;

    let isExcluded = false; 

    while (i <= 12) {
        let grade = Number(input[index]);
        index++;

        if (grade < 4.00) {
            badGrade++;

            if (badGrade > 1) {
                isExcluded = true;
                console.log(`${name} has been excluded at ${i} grade`);
                break;
            }
            continue;

        }
        sumGrade += grade;
        i++;
    }
    if (!isExcluded) {
        let avgGrade = sumGrade / 12;
        console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
    }

}
solve(["Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"])

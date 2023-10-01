function calculator(input) {

    let deposite = Number(input[0]);
    let period = Number(input[1]);
    let percentage = Number(input[2]);

    let lihva = deposite * (percentage / 100);
    let lihvaMesec = lihva / 12;
    let sum = deposite + period * lihvaMesec;

    console.log(sum);
}
calculator(["200 ", "3 ","5.7 "])
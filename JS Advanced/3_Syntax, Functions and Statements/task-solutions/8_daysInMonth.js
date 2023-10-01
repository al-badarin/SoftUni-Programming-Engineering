function daysInMonth(month, year) {

    if (month === 2 && year % 4 === 0) {
        return 29;
    } else if (month === 2 && year % 4 !== 0) {
        return 28;
    } else {
        return new Date(month, year, 0).getDate();
    }
}
console.log(daysInMonth(2, 2021));
function solve(pagesCurrentBook, pagesPerHour, daysToBeDone) {

    let totalTime = pagesCurrentBook / pagesPerHour;
    let numbersOfHours = totalTime / daysToBeDone;

    console.log(numbersOfHours);
}
solve(212, 20, 2);
solve(432, 15, 4);
function solve(input) {

    let days = Number(input[0]);
    let hours = Number(input[1]);

    let sum = 0;
    let tax = 0;
    let hoursSum = 0;
    let total = 0;

    for (let day = 1; day <= days; day++){
        let currentDay = day;
        let currentHour = 0;
        sum = 0;

        for (let hour = 1; hour <= hours; hour++){
            let currentHour = hour;
            hoursSum++;

            if (currentDay % 2 === 0){
                if (currentHour % 2 === 0){
                    tax = 1;
                } else {
                    tax = 2.5;
                }
            }else {
                if (currentHour % 2 === 0){
                    tax = 1.25;
                } else {
                    tax = 1;
                }
            }
            sum += tax;
        }
        total += sum;
        console.log(`Day: ${currentDay} - ${sum.toFixed(2)} leva`);
    }
    console.log(`Total: ${total.toFixed(2)} leva`);
}
solve(["2",
    "5"])

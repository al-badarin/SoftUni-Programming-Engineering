function solve(input) {

    let numLocations = Number(input[0]);

    let index = 1;
    let totalDiggedGold = 0;
   

    for (i = 1; i <= numLocations; i++) {
        while (i === 1) {
            let avgKgGoldPerDay = Number(input[index]);
            index++;

            let daysDigging = Number(input[index]);
            index++;
            for (d = 3; d <= daysDigging; d++){
                let diggedGoldForTheDay = Number(input[d]);
                totalDiggedGold += diggedGoldForTheDay;
            }
            let avgDiggedGold = totalDiggedGold / daysDigging;

            if (avgDiggedGold >= avgKgGoldPerDay){
                console.log(`Good job! Average gold per day: ${avgDiggedGold.toFixed(2)}.`);
            }
            else {console.log(`You need ${(avgKgGoldPerDay - avgDiggedGold).toFixed(2)} gold.`);
            }
        }

        while (i === 2) {
            let avgKgGoldPerDay = Number(input[index]);
            index++;

            let daysDigging = Number(input[index]);
            index++;
            for (d = 8; d <= 9; d++){
                let diggedGoldForTheDay = Number(input[d]);
                totalDiggedGold += diggedGoldForTheDay;
            }
            let avgDiggedGold = totalDiggedGold / daysDigging;

            if (avgDiggedGold >= avgKgGoldPerDay){
                console.log(`Good job! Average gold per day: ${avgDiggedGold.toFixed(2)}.`);
            }
            else {console.log(`You need ${(avgKgGoldPerDay - avgDiggedGold).toFixed(2)} gold.`);
            }
        }
    }
}
solve(["2",//numLocations     //0
    "10",//avgKgGoldPerDay    //1
    "3",//daysDigging         //2
    "10",//kgDay1             //3
    "10",//kgDay2             //4
    "11",//kgDay3             //5
    "20",//avgKgGoldPerDay    //6
    "2",//daysDigging         //7
    "20",//kgDay1             //8
    "10"])//kgDay2            //9
